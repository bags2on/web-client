import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Filters from './Filters/Filters'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import CatalogItem from '../../components/CatalogItem/CatalogItem'
import Pagination from '../../components/Pagination/Pagination'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core'
import { AllProductsDocument, AllProductsQuery, AllProductsVariables } from '../../graphql/product/_gen_/products.query'

const useStyles = makeStyles(() => ({
  root: {
    // background: '#ff9900'
    maxWidth: '1600px',
    margin: '0 auto'
  },
  list: {
    margin: 0,
    padding: 5,
    listStyle: 'none'
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    margin: '15px 0 5px 10px'
  },
  loaderWapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pageContainer: {
    padding: '0 20px'
    // backgroundColor: 'limegreen' //
  }
}))

interface ParamTypes {
  page: string
}

const Catalog: React.FC = () => {
  const { page } = useParams<ParamTypes>()

  const { loading, data, error } = useQuery<AllProductsQuery, AllProductsVariables>(AllProductsDocument)

  const numOfPage = page ? Number(page) : 1

  const classes = useStyles()

  if (loading) {
    return (
      <div className={classes.loaderWapper}>
        <ScaleLoader fallback />
      </div>
    )
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
      <Typography className={classes.title} component="h2">
        Каталог
      </Typography>
      <Grid container className={classes.pageContainer}>
        <Grid item xs={2}>
          <Filters />
        </Grid>
        <Grid item xs={10}>
          <Grid container component="ul" className={classes.list}>
            {data?.products.map((product) => (
              <Grid key={product.id} component="li" item xs={6} md={4} lg={3} xl={2}>
                <CatalogItem
                  url={product.preview}
                  title={product.title}
                  price={product.price}
                  id={product.id}
                  discountPrice={product.discount}
                  mainTag={product.mainTag}
                  inStock={product.instock}
                />
              </Grid>
            ))}
          </Grid>
          <Pagination total={20} currentPage={isNaN(numOfPage) ? 1 : numOfPage} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Catalog
