import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import SvgIcon from '@material-ui/core/SvgIcon'
import Button from '../../shared/Button/Button'
import Filters from './Filters/Filters'
import Products from './Products/Products'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import ErrorPlug from '../../shared/ErrorPlug'
import { ReactComponent as FilterIcon } from '../../assets/svg/filter.svg'
import { useParams, useLocation } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { AllProductsDocument, AllProductsQuery, AllProductsVariables } from '../../graphql/product/_gen_/products.query'
import { CategoryType, Gender, MainTag } from '../../graphql/types'
import classes from './Catalog.module.scss'

interface ParamTypes {
  page: string
}

type genderType = 'Female' | 'Male' | 'Unisex'
type availability = 'inStock' | 'byOrder'
type mainTagType = 'Stock' | 'New' | 'Top'
type categoryType = 'Bag' | 'Wallet' | 'Backpack' | 'Suitcase' | 'Other'

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

const Catalog: React.FC = () => {
  const { page } = useParams<ParamTypes>()
  const location = useLocation<LocationState>()

  const { categoryName, genderType } = location.state || { categoryName: '', genderType: '' }

  const numOfPage = page ? Number(page) : 1

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0])
  const [isOpen, setOpen] = useState<boolean>(false)

  const [getProducts, { loading, data, error }] = useLazyQuery<AllProductsQuery, AllProductsVariables>(
    AllProductsDocument,
    {
      onCompleted: (data) => {
        if (data?.allProducts.priceRange) {
          const { lt, gt } = data?.allProducts.priceRange
          setPriceRange([lt, gt])
        }
      }
    }
  )

  useEffect(() => {
    if (categoryName || genderType) {
      history.replaceState({}, '')
    }

    getProducts({
      variables: {
        gender: genderType ? [Gender[genderType]] : [],
        instock: undefined,
        category: categoryName ? [CategoryType[categoryName]] : []
      }
    })
  }, [])

  const handleFiltersSubmit = (values: FilterValues) => {
    console.log(values)
    const { gender, availability, mainTag, priceRange, category } = values

    let price

    if (priceRange.length) {
      const [lt, gt] = priceRange

      price = {
        lt,
        gt
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
        mainTag: mainTag ? MainTag[mainTag] : null,
        gender: gender.map((g: genderType) => Gender[g]),
        category: category.map((c: categoryType) => CategoryType[c])
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

    getProducts({
      variables: {
        gender: [],
        instock: undefined,
        category: []
      }
    })
  }

  if (error) {
    return <ErrorPlug />
  }

  const filtersInitialValues = {
    gender: genderType ? [genderType] : [],
    availability: [],
    mainTag: '',
    priceRange: priceRange,
    category: categoryName ? [categoryName] : []
  }

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
                  totalPages={20}
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
