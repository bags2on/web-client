/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import SvgIcon from '@material-ui/core/SvgIcon'
import Button from '../../shared/Button/Button'
import Filters from './Filters/Filters'
import Products from './Products/Products'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import { ReactComponent as FilterIcon } from '../../assets/svg/filter.svg'
import { useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { AllProductsDocument, AllProductsQuery, AllProductsVariables } from '../../graphql/product/_gen_/products.query'
import { CategoryType, Gender, MainTag } from '../../types'
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

const Catalog: React.FC = () => {
  const { page } = useParams<ParamTypes>()
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
    getProducts({
      variables: {
        gender: [],
        instock: undefined,
        category: []
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

  const handleReftesh = (): void => {
    getProducts({
      variables: {
        gender: [],
        instock: undefined,
        category: []
      }
    })
  }

  if (error) {
    return (
      <div className={classes.loaderWapper}>
        <h1>Access denied</h1>
      </div>
    )
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
              <Filters priceRange={priceRange} onSubmit={handleFiltersSubmit} />
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
