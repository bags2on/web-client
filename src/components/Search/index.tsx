import React, { useState } from 'react'
import clsx from 'clsx'
import { IconButton } from '@/shared/IconButton'
// import {ScaleLoader} from '@/shared/loaders/ScaleLoader'
// import Image from 'next/image'
// import { routeNames, generateLink } from '@/utils/navigation'
// import { useLazyQuery } from '@apollo/client'
import { useTranslation } from 'next-i18next'

import { Formik, Form, Field } from 'formik'
import { TopSearchSchema, TopSearchType } from '@/utils/formValidationSchema'
import SearchIcon from '../../../public/assets/icons/search.svg'
// import { getProductMainTagColor } from '@/utils/styling'
// import {
//   SearchProductQuery,
//   SearchProductVariables,
//   SearchProductDocument
// } from '../../graphql/product/_gen_/searchProduct.query'

import styles from './Search.module.scss'

export function Search() {
  const { t } = useTranslation()
  const [inputValue, setInputValue] = useState<string>('')
  const [withFocus, setWithFocus] = useState<boolean>(false)

  // const [getProducts, { loading, data, error }] = useLazyQuery<
  //   SearchProductQuery,
  //   SearchProductVariables
  // >(SearchProductDocument, {
  //   fetchPolicy: 'network-only'
  // })

  const handleSearch = (_values: TopSearchType): void => {
    // const value = values.searchQuery.trim()

    setInputValue(_values.searchQuery || '')

    // if (value && value !== inputValue) {
    //   getProducts({
    //     variables: {
    //       input: value
    //     }
    //   })
    // }
  }

  // const removeFocus = (): void => setWithFocus(false)

  const initialValues: TopSearchType = { searchQuery: '' }

  // const products = data?.searchProductByName

  // let content = (
  //   <LoaderBox>
  //     <span>
  //       {error ? 'Ошибка, повторите попытку позже' : 'По вашему запросу ничего не найдено.'}
  //     </span>
  //   </LoaderBox>
  // )

  // const handleUserSelection = (_id: string): void => {
  //   setWithFocus(false)
  //   // history.push(generateLink(routeNames.product, id))
  // }

  // if (products?.length) {
  //   content = (
  //     <ProductList>
  //       {products &&
  //         products.map((product) => (
  //           <li key={product.id}>
  //             <LinkWrapper
  //               tabIndex={0}
  //               onClick={() => handleUserSelection(product.id)}
  //               href={generateLink(routeNames.product, product.id)}
  //             >
  //               <div style={{ height: 77, width: 77 }}>
  //                 <Image width={77} height={77} src="xc*image" alt="alt text" />
  //               </div>
  //               <InfoBox>
  //                 <ProductTitle>{product.title}</ProductTitle>
  //                 {product.mainTag !== 'REGULAR' && (
  //                   <ProductMainTag
  //                     style={{
  //                       backgroundColor: getProductMainTagColor(product.mainTag)
  //                     }}
  //                   >
  //                     product.mainTag
  //                   </ProductMainTag>
  //                 )}
  //               </InfoBox>
  //             </LinkWrapper>
  //           </li>
  //         ))}
  //     </ProductList>
  //   )
  // }

  return (
    <div className={styles.container}>
      <Formik
        onSubmit={handleSearch}
        initialValues={initialValues}
        validationSchema={TopSearchSchema}
      >
        {(): React.ReactElement => (
          <Form className={styles.form} tabIndex={0} onFocus={() => setWithFocus(true)} noValidate>
            <Field
              name="searchQuery"
              autoComplete="off"
              placeholder={t('mySearch')}
              className={clsx({
                [styles['search-input']]: true,
                [styles['with-data']]: withFocus && inputValue
              })}
            />
            <IconButton type="submit" className={styles['search-button']}>
              <div className={clsx('svg-icon', styles['search-icon'])}>
                <SearchIcon />
              </div>
            </IconButton>
          </Form>
        )}
      </Formik>
      {/* {inputValue && withFocus && (
        <Results>
          {loading ? (
            <LoaderBox>
              <ScaleLoader />
            </LoaderBox>
          ) : (
            content
          )}
        </Results>
      )} */}
      <div className={clsx(styles.overlay, withFocus && inputValue && styles['overlay-show'])} />
    </div>
  )
}
