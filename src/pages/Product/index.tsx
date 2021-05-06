import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import Grid from '@material-ui/core/Grid'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import Preview from './Preview/Preview'
import Details from './Details'
import { makeStyles } from '@material-ui/core'
import {
  GetProductByIdDocument,
  GetProductByIdQuery,
  GetProductByIdVariables
} from '../../graphql/product/_gen_/productByID.query'

interface ProductID {
  id: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    maxWidth: 1200,
    margin: '0 auto',
    [theme.breakpoints.up('laptop')]: {
      height: 'calc(var(--vh, 1vh) * 100 - 78px)'
    }
  },
  loaderWapper: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const ProductDetails: React.FC = () => {
  const classes = useStyles()
  const { id } = useParams<ProductID>()

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [])

  const { loading, data, error } = useQuery<GetProductByIdQuery, GetProductByIdVariables>(GetProductByIdDocument, {
    variables: { id },
    fetchPolicy: 'network-only'
  })

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

  if (!data?.product) {
    return (
      <div className={classes.loaderWapper}>
        <h1>Access denied</h1>
      </div>
    )
  }

  const { product } = data

  console.log(product)

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Preview images={product.images} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Details
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            tags={product.tags}
            inStock={product.instock}
            discountPrice={product.discount}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductDetails
