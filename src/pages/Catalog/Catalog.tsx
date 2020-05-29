import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { gql } from 'apollo-boost'
import { makeStyles } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import ScaleLoader from '../../common/loaders/ScaleLoader'
import CatalogItem from '../../components/CatalogItem/CatalogItem'

const GET_ALL_PRODUCTS = gql`
  {
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
  }
}))

const Catalog: React.FC = () => {
  const { loading, data } = useQuery(GET_ALL_PRODUCTS)

  const classes = useStyles()

  if (loading) {
    return <ScaleLoader />
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h2">
        Catalog
      </Typography>
      <Grid container component="ul" className={classes.list}>
        {data.products.map((product: Product) => (
          <Grid key={product.id} component="li" item xs={6}>
            <CatalogItem url={product.preview} title={product.title} price={product.price} id={product.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Catalog
