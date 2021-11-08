/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import SvgIcon from '@material-ui/core/SvgIcon'
import Button from '../../shared/Button/Button'
import Filters from './Filters/Filters'
import Products from './Products/Products'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import ErrorPlug from '../../shared/ErrorPlug'
import { ReactComponent as FilterIcon } from '../../assets/svg/icons/filter.svg'
import { useParams, useLocation, Redirect } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { AllProductsDocument, AllProductsQuery, AllProductsVariables } from '../../graphql/product/_gen_/products.query'
import { CategoryType, Gender, MainTag } from '../../graphql/types'
import classes from './Catalog.module.scss'
import routes from '../../utils/routes'
import appHistory from '../../utils/history'

interface ParamTypes {
  page: string
}

type genderType = 'FEMALE' | 'MALE' | 'UNISEX'
type availability = 'inStock' | 'byOrder'
type mainTagType = 'STOCK' | 'NEW' | 'Top'
type categoryType = 'BAG' | 'WALLET' | 'BACKPACK' | 'SUITCASE' | 'OTHER'

interface FilterValues {
  availability: Array<availability>
  gender: Array<genderType>
  mainTag: mainTagType
  priceRange: [number, number]
  category: Array<categoryType>
}

interface LocationState {
  categoryName?: categoryType | ''
  genderType?: genderType | ''
}

// function useQuery() {
//   const { search } = useLocation<LocationState>()
//   return React.useMemo(() => new URLSearchParams(search), [search])
// }

const Catalog: React.FC = () => {
  const { page } = useParams<ParamTypes>()
  const location = useLocation<LocationState>()

  const { categoryName, genderType } = location.state || { categoryName: '', genderType: '' }

  const numOfPage = !isNaN(Number(page)) ? Number(page) : 1

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0])
  const [isOpen, setOpen] = useState<boolean>(false)

  // const filtersInitialValues = {
  //   gender: genderType ? [genderType] : [],
  //   availability: [],
  //   mainTag: '',
  //   priceRange: priceRange,
  //   // priceRange: priceRange !== undefined ? priceRange : ([0, 0] as [number, number]),
  //   category: categoryName ? [categoryName] : []
  // }

  const [requestValues, setRequestValues] = useState({
    gender: genderType ? [genderType] : [],
    availability: [],
    mainTag: '',
    priceRange: priceRange,
    category: categoryName ? [categoryName] : []
  })

  const [getProducts, { loading, data, error }] = useLazyQuery<AllProductsQuery, AllProductsVariables>(
    AllProductsDocument,
    {
      onCompleted: (data) => {
        if (data?.allProducts.priceRange) {
          const { gt, lt } = data.allProducts.priceRange
          // const f = data.allProducts.filter
          // setRequestValues({
          //   gender: (f.gender as genderType[]) || [],
          //   availability: [],
          //   mainTag: f.mainTag ? f.mainTag : '',
          //   priceRange: [gt, lt],
          //   category: (f.category as categoryType[]) || []
          // })
          setPriceRange([gt, lt])
        }
      }
    }
  )

  const filtersInitialValues = {
    gender: genderType ? [genderType] : [],
    availability: [],
    mainTag: '',
    priceRange: priceRange,
    category: categoryName ? [categoryName] : []
  }

  useEffect(() => {
    window.scrollTo({
      top: 0
    })

    if (categoryName || genderType) {
      history.replaceState({}, '')
    }

    const filters = sessionStorage.getItem('filters')

    if (filters) {
      const values = JSON.parse(filters)

      const { gender, availability, mainTag, priceRange, category } = values as FilterValues

      let price

      const [gt, lt] = priceRange

      if (gt && lt) {
        price = {
          gt,
          lt
        }
      }

      let instock: boolean | undefined

      if (availability.length === 1) {
        const stockSrc = {
          inStock: true,
          byOrder: false
        }

        instock = stockSrc[availability[0]]
      }

      getProducts({
        variables: {
          instock,
          price,
          mainTag: (mainTag || undefined) as MainTag,
          gender: gender as Gender[],
          category: category as CategoryType[],
          page: numOfPage
        }
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

    return () => {
      console.log('Catalog unmount')
    }
  }, [numOfPage])

  const handleFiltersSubmit = (values: FilterValues) => {
    console.log(values)
    const { gender, availability, mainTag, priceRange, category } = values

    sessionStorage.setItem('filters', JSON.stringify(values))

    let price

    const [gt, lt] = priceRange

    if (gt && lt) {
      price = {
        gt,
        lt
      }
    }

    let instock: boolean | undefined

    if (availability.length === 1) {
      const stockSrc = {
        inStock: true,
        byOrder: false
      }

      instock = stockSrc[availability[0]]
    }

    getProducts({
      variables: {
        instock,
        price,
        mainTag: (mainTag || undefined) as MainTag,
        gender: gender as Gender[],
        category: category as CategoryType[],
        // category: category.map((c: categoryType) => CategoryType[c]),
        page: numOfPage
      }
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
    if (formikRef) {
      formikRef.current?.reset()
    }

    appHistory.push(`/catalog/1`)

    // getProducts({
    //   variables: {
    //     gender: [],
    //     instock: undefined,
    //     category: [],
    //     page: numOfPage
    //   }
    // })
  }

  if (error) {
    if (error.message === 'invalid page') {
      return <Redirect to={routes.catalog} />
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
                className={classes.filterButton}
                disableShadow
                disabled={loading}
                fullWidth
                startIcon={
                  <SvgIcon component="span">
                    <FilterIcon />
                  </SvgIcon>
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
                <ScaleLoader fallback />
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

export default Catalog
