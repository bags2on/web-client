import React, { useState } from 'react'
// import ScaleLoader from '@/shared/loaders/ScaleLoader'
// import Image from 'next/image'
// import { routeNames, generateLink } from '@/utils/navigation'
// import { useLazyQuery } from '@apollo/client'
import { useTranslation } from 'next-i18next'

import { Formik } from 'formik'
import { TopSearchSchema, TopSearchType } from '@/utils/formValidationSchema'
import SearchIcon from '../../../public/assets/icons/search.svg'
// import { getProductMainTagColor } from '@/utils/styling'
// import {
//   SearchProductQuery,
//   SearchProductVariables,
//   SearchProductDocument
// } from '../../graphql/product/_gen_/searchProduct.query'

import {
  Container,
  SearchForm,
  SearchInput,
  SearchButton,
  TheSearchIcon,
  // LinkWrapper,
  // ProductList,
  // Results,
  // LoaderBox,
  // InfoBox,
  // ProductTitle,
  // ProductMainTag,
  Overlay
} from './Search.styled'

const Search = () => {
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

    setInputValue('')

    // if (value && value !== inputValue) {
    //   getProducts({
    //     variables: {
    //       input: value
    //     }
    //   })
    // }
  }

  const removeFocus = (): void => setWithFocus(false)

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
    <Container>
      <Formik
        onSubmit={handleSearch}
        initialValues={initialValues}
        validationSchema={TopSearchSchema}
      >
        {(): React.ReactElement => (
          <SearchForm tabIndex={0} onFocus={() => setWithFocus(true)} noValidate>
            <SearchInput
              name="searchQuery"
              autoComplete="off"
              placeholder={t('mySearch')}
              $withData={withFocus && inputValue}
            />
            <SearchButton type="submit">
              <TheSearchIcon>
                <SearchIcon />
              </TheSearchIcon>
            </SearchButton>
          </SearchForm>
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
      <Overlay $show={Boolean(withFocus && inputValue)} onClick={removeFocus} />
    </Container>
  )
}

export default Search
