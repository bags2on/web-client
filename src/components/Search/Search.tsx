import React, { useState } from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import SvgIcon from '@material-ui/core/SvgIcon'
import ImagePlaceholder from '../../shared/ImagePlaceholder'
import history from '../../utils/history'
import routes from '../../utils/routes'
import { makeStyles } from '@material-ui/core'
import { useLazyQuery } from '@apollo/client'
import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    [theme.breakpoints.up('xl')]: {
      margin: '0 25px'
    }
  },
  searchBox: {
    width: '100%',
    position: 'relative',
    tabIndex: 0,
    verticalAlign: 'bottom',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  searchInput: {
    fontSize: 14,
    fontWeight: 500,
    position: 'absolute',
    right: 0,
    outline: 'none',
    width: '100%',
    left: 'auto',
    height: '100%',
    zIndex: 450,
    transitionDuration: '0.4s',
    borderRadius: 10,
    border: '1px solid',
    color: '#fff',
    borderColor: '#3c4144',
    backgroundColor: '#3c4144',
    padding: '10px 46px 10px 15px',
    '-moz-transition-duration': '0.4s',
    '-webkit-transition-duration': '0.4s',
    '-o-transition-duration': '0.4s',
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      BorderColor: 'transparent'
    },
    '&::placeholder': {
      color: '#c4c4c4',
      textAlign: 'center'
    }
  },
  searchInputNoEmpty: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  searchButton: {
    color: '#bbc0c4',
    zIndex: 475,
    '& svg': {
      fontSize: 19
    },
    [theme.breakpoints.up('md')]: {
      '& svg': {
        fontSize: 22
      }
    },
    '&:hover': {
      background: 'none'
    }
  },
  resultBox: {
    position: 'absolute',
    zIndex: 500,
    top: '100%',
    width: '100%',
    maxHeight: 400,
    padding: '15px 7px 10px',
    overflow: 'auto',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: theme.palette.type === 'light' ? '#fff' : '#3c4144'
  },
  linkWrapper: {
    display: 'flex',
    textDecoration: 'none',
    tabindex: 0,
    color: 'inherit'
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: '0 7px',
    '& li': {
      marginBottom: 7
    }
  },
  infoWrapper: {
    paddingTop: 10,
    marginLeft: 10
  },
  productTitle: {
    fontWeight: 500,
    margin: 0,
    display: 'block',
    marginBottom: 7
  },
  mainTag: {
    padding: '3px 5px',
    color: '#fff',
    fontWeight: 500,
    borderRadius: 6
  },
  overlay: {
    display: 'none',
    position: 'fixed',
    zIndex: 400,
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100 * var(--vh))',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  overlayVisible: {
    display: 'block'
  },
  feedbackBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    height: 77
  }
}))

const Search: React.FC = () => {
  const classes = useStyles()
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
    <div className={classes.feedbackBox}>
      <span>{error ? 'Ошибка, повторите попытку позже' : 'По вашему запросу ничего не найдено.'}</span>
    </div>
  )

  const handleUserSelection = (id: string): void => {
    setWithFocus(false)
    history.push(generateLink(routes.product, id))
  }

  if (products?.length) {
    content = (
      <ul className={classes.list}>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <Link
                onClick={() => handleUserSelection(product.id)}
                className={classes.linkWrapper}
                to={generateLink(routes.product, product.id)}
              >
                <div style={{ height: 77, width: 77 }}>
                  <ImagePlaceholder plain src={product.preview} altText={product.title} />
                </div>
                <div className={classes.infoWrapper}>
                  <p className={classes.productTitle}>{product.title}</p>
                  {product.mainTag !== 'REGULAR' && (
                    <span
                      className={classes.mainTag}
                      style={{
                        backgroundColor: getColorForMainTagName(product.mainTag)
                      }}
                    >
                      {t(`product.mainTag.${product.mainTag}`)}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
      </ul>
    )
  }

  return (
    <div className={classes.root}>
      <Formik onSubmit={handleSearch} initialValues={initialValues} validationSchema={TopSearchSchema}>
        {(): React.ReactElement => (
          <Form className={classes.searchBox} onFocus={() => setWithFocus(true)} noValidate>
            <Field
              name="searchQuery"
              autoComplete="off"
              placeholder={t('header.search')}
              className={clsx({
                [classes.searchInput]: true,
                [classes.searchInputNoEmpty]: withFocus && inputValue
              })}
            />
            <IconButton className={classes.searchButton} color="primary" type="submit">
              <SvgIcon>
                <SearchIcon />
              </SvgIcon>
            </IconButton>
          </Form>
        )}
      </Formik>
      {inputValue && withFocus && (
        <div className={classes.resultBox}>
          {loading ? (
            <div className={classes.feedbackBox}>
              <ScaleLoader />
            </div>
          ) : (
            content
          )}
        </div>
      )}
      <div
        onClick={removeFocus}
        className={clsx({
          [classes.overlay]: true,
          [classes.overlayVisible]: withFocus && inputValue
        })}
      />
    </div>
  )
}

export default Search
