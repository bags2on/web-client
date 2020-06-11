import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { gql } from 'apollo-boost'
import { makeStyles } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import CatalogItem from '../../components/CatalogItem/CatalogItem'
import Pagination from '../../components/Pagination/Pagination'

const GET_ALL_PRODUCTS = gql`
  query allProducts {
    products {
      id
      price
      title
      preview
    }
  }
`

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
  },
  list: {
    margin: 0,
    padding: 5,
    listStyle: 'none'
  },
  title: {
    fontSize: '26px',
    fontWeight: 600,
    margin: '15px 0 15px 10px'
  },
  loaderWapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const Catalog: React.FC = () => {
  const { page } = useParams()

  const { loading, data } = useQuery(GET_ALL_PRODUCTS)

  const numOfPage = page ? Number(page) : 1

  const classes = useStyles()

  if (loading) {
    return (
      <div className={classes.loaderWapper}>
        <ScaleLoader fallback />
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h2">
        Catalog
      </Typography>
      <Grid container component="ul" className={classes.list}>
        {data.products.map((product: Product) => (
          <Grid key={product.id} component="li" item xs={6} md={4} lg={3} xl={2}>
            <CatalogItem url={product.preview} title={product.title} price={product.price} id={product.id} />
          </Grid>
        ))}
      </Grid>
      <Pagination total={20} currentPage={isNaN(numOfPage) ? 1 : numOfPage} />
    </div>
  )
}

export default Catalog
