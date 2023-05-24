import React, { useState } from 'react'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import ImagePlaceholder from '../../shared/ImagePlaceholder'
import history from '../../utils/history'
import routes from '../../utils/routes'
import { useLazyQuery } from '@apollo/client'
import { Formik } from 'formik'
import { TopSearchSchema, TopSearchType } from '../../utils/validationSchema'
import { ReactComponent as SearchIcon } from '../../assets/svg/icons/search.svg'
import { useTranslation } from 'react-i18next'
import { getColorForMainTagName } from '../../utils/styling'
import { generateLink } from '../../utils/links'
import {
  SearchProductQuery,
  SearchProductVariables,
  SearchProductDocument
} from '../../graphql/product/_gen_/searchProduct.query'

import {
  Container,
  SearchForm,
  SearchInput,
  SearchButton,
  TheSearchIcon,
  LinkWrapper,
  ProductList,
  Results,
  LoaderBox,
  InfoBox,
  ProductTitle,
  ProductMainTag,
  Overlay
} from './Search.styled'

const Search: React.FC = () => {
  const { t } = useTranslation()

  const [inputValue, setInputValue] = useState<string>('')
  const [withFocus, setWithFocus] = useState<boolean>(false)

  const [getProducts, { loading, data, error }] = useLazyQuery<SearchProductQuery, SearchProductVariables>(
    SearchProductDocument,
    {
      fetchPolicy: 'network-only'
    }
  )

  const handleSearch = (values: TopSearchType): void => {
    const value = values.searchQuery.trim()

    setInputValue(value)

    if (value && value !== inputValue) {
      getProducts({
        variables: {
          input: value
        }
      })
    }
  }

  const removeFocus = (): void => setWithFocus(false)

  const initialValues: TopSearchType = { searchQuery: '' }

  const products = data?.searchProductByName

  let content = (
    <LoaderBox>
      <span>{error ? 'Ошибка, повторите попытку позже' : 'По вашему запросу ничего не найдено.'}</span>
    </LoaderBox>
  )

  const handleUserSelection = (id: string): void => {
    setWithFocus(false)
    history.push(generateLink(routes.product, id))
  }

  if (products?.length) {
    content = (
      <ProductList>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <LinkWrapper
                tabIndex={0}
                onClick={() => handleUserSelection(product.id)}
                to={generateLink(routes.product, product.id)}
              >
                <div style={{ height: 77, width: 77 }}>
                  <ImagePlaceholder plain src={product.preview} altText={product.title} />
                </div>
                <InfoBox>
                  <ProductTitle>{product.title}</ProductTitle>
                  {product.mainTag !== 'REGULAR' && (
                    <ProductMainTag
                      style={{
                        backgroundColor: getColorForMainTagName(product.mainTag)
                      }}
                    >
                      {t(`product.mainTag.${product.mainTag}`)}
                    </ProductMainTag>
                  )}
                </InfoBox>
              </LinkWrapper>
            </li>
          ))}
      </ProductList>
    )
  }

  return (
    <Container>
      <Formik onSubmit={handleSearch} initialValues={initialValues} validationSchema={TopSearchSchema}>
        {(): React.ReactElement => (
          <SearchForm tabIndex={0} onFocus={() => setWithFocus(true)} noValidate>
            <SearchInput
              name="searchQuery"
              autoComplete="off"
              placeholder={t('header.search')}
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
      {inputValue && withFocus && (
        <Results>
          {loading ? (
            <LoaderBox>
              <ScaleLoader />
            </LoaderBox>
          ) : (
            content
          )}
        </Results>
      )}
      <Overlay $show={Boolean(withFocus && inputValue)} onClick={removeFocus} />
    </Container>
  )
}

export default Search
