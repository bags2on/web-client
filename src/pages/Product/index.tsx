import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import Grid from '@material-ui/core/Grid'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import Preview from './Preview/Preview'
import Details from './Details'
import { makeStyles } from '@material-ui/core'
import { GET_PRODUCT_BY_ID } from '../../graphql/product'

interface Product {
  id: string
  title: string
  price: number
  tags: string[]
  images: string[]
  description: string
}

interface ProductData {
  product: Product
}

interface ProductID {
  id: string
}

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    maxWidth: 1200,
    margin: '0 auto'
  },
  loaderWapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const ProductDetails: React.FC = () => {
  const { id } = useParams<ProductID>()

  const { loading, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
    fetchPolicy: 'network-only' // temp props
  })

  const classes = useStyles()

  if (loading) {
    return (
      <div className={classes.loaderWapper}>
        <ScaleLoader fallback />
      </div>
    )
  }

  const { product }: ProductData = data

  const tmp = Boolean(Math.round(Math.random()))

  console.log(product)

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Preview images={product.images} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Details
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            tags={product.tags}
            inStock={tmp}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductDetails
