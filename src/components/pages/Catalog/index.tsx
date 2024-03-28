import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import FilterIcon from '../../../../public/assets/icons/filter.svg'
import { Button } from '@/components/ui/Button'
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
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import type { CategoryType, ProductTag, Gender } from '@/graphql/types'

import classes from './Catalog.module.scss'

type PriceRangeType = {
  gt: number
  lt: number
}

export type FormValues = {
  gender: Array<Lowercase<keyof typeof Gender>>
  availability: Array<'inStock' | 'byOrder'>
  tag: Lowercase<keyof typeof ProductTag> | null
  priceRange: [number, number]
  category: Array<Lowercase<keyof typeof CategoryType>>
}

export function CatalogIndex() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0])
  const [isOpen, setOpen] = useState<boolean>(false)

  const page = 1
  const numOfPage = !isNaN(Number(page)) ? Number(page) : 1

  const [getProducts, { loading, data, error }] = useLazyQuery<
    AllProductsQuery,
    AllProductsQueryVariables
  >(AllProductsDocument, {
    onCompleted: (data) => {
      if (data?.products.priceRange) {
        const { gt, lt } = data.products.priceRange
        setPriceRange([gt, lt])
      }
    }
  })

  const formMethods = useForm<FormValues>({
    mode: 'onSubmit',
    defaultValues: {
      gender: [],
      availability: [],
      tag: null,
      priceRange: undefined,
      category: []
    }
  })

  const { watch, handleSubmit } = formMethods

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('-- API --', data)

    const { gender, availability, tag, priceRange, category } = data

    let price: PriceRangeType | undefined

    if (priceRange) {
      const [gt, lt] = priceRange
      price = { gt, lt }
    }

    let instock: boolean | undefined

    if (availability.length === 1) {
      const map = { inStock: true, byOrder: false }
      instock = map[availability[0]]
    }

    const categoryData = category as unknown as CategoryType
    const tagData = tag as unknown as ProductTag
    const genderData = gender as unknown as Gender

    getProducts({
      variables: {
        page: numOfPage,
        price,
        instock,
        category: categoryData,
        tag: tagData,
        gender: genderData
      }
    })
  }

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)())
    return () => subscription.unsubscribe()
  }, [handleSubmit, watch])

  useEffect(() => {
    getProducts({
      variables: {
        page: numOfPage
      }
    })
  }, [numOfPage, getProducts])

  const handleFilterClick = (): void => {
    document.body.style.overflow = 'hidden'
    setOpen(true)
  }

  const handleDrawerClose = (): void => {
    document.body.style.overflow = 'unset'
    setOpen(false)
  }

  const handleReftesh = (): void => {
    console.log('form reset')
  }

  if (error) {
    if (error.message === 'invalid page') {
      // return <Redirect to={routeNames.catalog} />
      console.log(error)
    }
    return <ErrorPlug />
  }

  const totalPages = data?.products.pagination.totalPages

  return (
    <div className={classes.root}>
      <FormProvider {...formMethods}>
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
                <Filters priceRange={priceRange} />
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
                    products={data?.products.products}
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
      </FormProvider>
    </div>
  )
}
