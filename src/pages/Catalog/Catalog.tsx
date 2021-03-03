import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Filters from './Filters/Filters'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import CatalogItem from '../../components/CatalogItem/CatalogItem'
import Pagination from '../../components/Pagination/Pagination'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core'
import { GET_PRODUCTS } from '../../graphql/product'

interface Product {
  id: string
  price: number
  title: string
  preview: string
  images: string
}

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

const Catalog: React.FC = () => {
  const { page } = useParams()

  const { loading, data } = useQuery(GET_PRODUCTS)

  const numOfPage = page ? Number(page) : 1

  const classes = useStyles()

  if (loading) {
    return (
      <div className={classes.loaderWapper}>
        <ScaleLoader fallback />
      </div>
    )
  }

  const TEMPgenerator = (m: number, n: number): number => {
    return m + Math.floor((n - m + 1) * Math.random())
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
            {data.products.map((product: Product) => (
              <Grid key={product.id} component="li" item xs={6} md={4} lg={3} xl={2}>
                <CatalogItem
                  url={product.preview}
                  title={product.title}
                  price={product.price}
                  id={product.id}
                  discountPrice={Math.round(Math.random() * 10) === 7 ? TEMPgenerator(350, 550) : 0}
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
