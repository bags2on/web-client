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
import { PriceRange } from '@/graphql/types'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import type { Gender, MainTag, Category } from '@/types'

import classes from './Catalog.module.scss'

// import { routeNames } from '@/utils/navigation'

type FormValues = {
  gender: Array<keyof typeof Gender>
  availability: Array<'inStock' | 'byOrder'>
  mainTag: keyof typeof MainTag | ''
  priceRange: [number, number]
  category: Array<keyof typeof Category>
}

type queryValues = {
  instock: boolean | undefined
  price: PriceRange | undefined
  mainTag: MainTag
  gender: Gender[]
  category: Category[]
}

function getQueryValues(values: FormValues): queryValues {
  const { gender, availability, mainTag, priceRange, category } = values

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
    category: category as Category[]
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

  const formMethods = useForm<FormValues>({
    mode: 'onSubmit',
    // resolver: valibotResolver(currentValidationSchema),
    defaultValues: {
      gender: [],
      availability: [],
      mainTag: '',
      category: []
    }
  })

  const { watch, handleSubmit } = formMethods

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data.mainTag)

    // getProducts({
    //   variables: { ...getQueryValues(values), page: numOfPage }
    // })
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
      if (data?.products.priceRange) {
        const { gt, lt } = data.products.priceRange
        setPriceRange([gt, lt])
      }
    }
  })

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)())
    return () => subscription.unsubscribe()
  }, [handleSubmit, watch])

  useEffect(() => {
    if (categoryName || genderType) history.replaceState({}, '')

    // if (filters) {
    //   const values = JSON.parse(filters) as FilterValues

    //   getProducts({
    //     variables: { ...getQueryValues(values), page: numOfPage }
    //   })
    // } else {
    getProducts({
      variables: {
        gender: genderType ? ([genderType] as Gender[]) : [],
        instock: undefined,
        category: categoryName ? ([categoryName] as Category[]) : [],
        page: numOfPage
      }
    })
    // }
  }, [numOfPage])

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

  // <form onSubmit={formMethods.handleSubmit(handleSubmit)}>

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
