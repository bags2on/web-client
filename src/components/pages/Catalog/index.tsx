import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import FilterIcon from '../../../../public/assets/icons/filter.svg'
import { Button } from '@/shared/Button'
import { Filters } from './Filters/Filters'
import { Products } from './Products/Products'
import { ScaleLoader } from '@/shared/loaders/ScaleLoader'
import { ErrorPlug } from '@/shared/ErrorPlug'
import { useLazyQuery } from '@apollo/client'
import {
  AllProductsDocument,
  AllProductsQuery,
  AllProductsQueryVariables
} from '@/graphql/product/_gen_/products.query'
import { CategoryType, Gender, MainTag, PriceRange } from '@/graphql/types'

import classes from './Catalog.module.scss'
// import { routeNames } from '@/utils/navigation'

type genderType = 'FEMALE' | 'MALE' | 'UNISEX'
type availabilityType = 'inStock' | 'byOrder'
type mainTagType = 'STOCK' | 'NEW'
type categoryType = 'BAG' | 'WALLET' | 'BACKPACK' | 'SUITCASE' | 'OTHER'

interface FilterValues {
  availability: Array<availabilityType>
  gender: Array<genderType>
  mainTag: mainTagType
  priceRange: [number, number]
  category: Array<categoryType>
}

type queryValues = {
  instock: boolean | undefined
  price: PriceRange | undefined
  mainTag: MainTag
  gender: Gender[]
  category: CategoryType[]
}

function getQueryValues(values: FilterValues): queryValues {
  const { gender, availability, mainTag, priceRange, category } = values as FilterValues

  let price

  const [gt, lt] = priceRange

  if (gt && lt) price = { gt, lt }

  let instock: boolean | undefined

  if (availability.length === 1) {
    const map = { inStock: true, byOrder: false }
    instock = map[availability[0]]
  }

  return {
    instock,
    price,
    mainTag: (mainTag || undefined) as MainTag,
    gender: gender as Gender[],
    category: category as CategoryType[]
  }
}

export function CatalogIndex() {
  // const { page } = useParams<ParamTypes>()

  const page = 1

  // const location = useLocation<LocationState>()

  const location = {
    state: {
      genderType: '',
      categoryName: ''
    }
  }

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0])
  const [isOpen, setOpen] = useState<boolean>(false)

  const { categoryName, genderType } = location.state || { categoryName: '', genderType: '' }

  const numOfPage = !isNaN(Number(page)) ? Number(page) : 1

  const [getProducts, { loading, data, error }] = useLazyQuery<
    AllProductsQuery,
    AllProductsQueryVariables
  >(AllProductsDocument, {
    onCompleted: (data) => {
      if (data?.allProducts.priceRange) {
        const { gt, lt } = data.allProducts.priceRange
        setPriceRange([gt, lt])
      }
    }
  })

  const filtersInitialValues = {
    gender: genderType ? [genderType] : [],
    availability: [],
    mainTag: '',
    priceRange: priceRange,
    category: categoryName ? [categoryName] : []
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })

    if (categoryName || genderType) history.replaceState({}, '')

    const filters = sessionStorage.getItem('filters')

    if (filters) {
      const values = JSON.parse(filters) as FilterValues

      getProducts({
        variables: { ...getQueryValues(values), page: numOfPage }
      })
    } else {
      getProducts({
        variables: {
          gender: genderType ? ([genderType] as Gender[]) : [],
          instock: undefined,
          category: categoryName ? ([categoryName] as CategoryType[]) : [],
          page: numOfPage
        }
      })
    }
  }, [numOfPage])

  const handleFiltersSubmit = (values: FilterValues) => {
    sessionStorage.setItem('filters', JSON.stringify(values))

    getProducts({
      variables: { ...getQueryValues(values), page: numOfPage }
    })
  }

  const handleFilterClick = (): void => {
    document.body.style.overflow = 'hidden'
    setOpen(true)
  }

  const handleDrawerClose = (): void => {
    document.body.style.overflow = 'unset'
    setOpen(false)
  }

  const formikRef = React.useRef<HTMLFormElement>(null)

  const handleReftesh = (): void => {
    if (formikRef) formikRef.current?.reset()
    // appHistory.push(routes.catalog + '/1')
  }

  if (error) {
    if (error.message === 'invalid page') {
      // return <Redirect to={routeNames.catalog} />
      console.log(error)
    }
    return <ErrorPlug />
  }

  const totalPages = data?.allProducts.pagination.totalPages

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.pageContainer}>
          <div className={classes.controlContainer}>
            <div className={classes.filterButtonWrapper}>
              <Button
                onClick={handleFilterClick}
                // className={classes.filterButton}
                disabled={loading}
                fullWidth
                startIcon={
                  <div className={clsx('svg-icon')}>
                    <FilterIcon />
                  </div>
                }
              >
                фильтр
              </Button>
            </div>
            <div
              className={clsx({
                [classes.filtersBox]: true,
                [classes.filtersBoxVisible]: isOpen
              })}
            >
              <Filters
                initValues={filtersInitialValues}
                priceRange={priceRange}
                formRef={formikRef}
                onSubmit={handleFiltersSubmit}
              />
            </div>
          </div>
          <div className={classes.viewBox}>
            {loading ? (
              <div className={classes.loaderWapper}>
                <ScaleLoader fallback={true} />
              </div>
            ) : (
              <div className={classes.productsContainer}>
                <Products
                  totalPages={totalPages ? totalPages : 1}
                  currentPage={isNaN(numOfPage) ? 1 : numOfPage}
                  products={data?.allProducts.products}
                  onActionButtonClick={handleReftesh}
                />
              </div>
            )}
          </div>
        </div>
        <div
          onClick={handleDrawerClose}
          className={clsx({
            [classes.overlay]: true,
            [classes.overlayVisible]: isOpen
          })}
        />
      </div>
    </div>
  )
}
