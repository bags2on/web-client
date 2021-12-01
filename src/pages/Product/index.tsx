import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import routes from '../../utils/routes'
import Grid from '@material-ui/core/Grid'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import ErrorPlug from '../../shared/ErrorPlug'
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
    maxWidth: 1300,
    margin: '0 auto',
    [theme.breakpoints.up('laptop')]: {
      minHeight: 'calc(var(--vh, 1vh) * 100 - 78px)'
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

  const { loading, data } = useQuery<GetProductByIdQuery, GetProductByIdVariables>(GetProductByIdDocument, {
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

  if (data?.product?.__typename === 'NotFound') {
    return <Redirect to={routes.notFound} />
  }

  const product = data?.product

  if (!product) {
    return <ErrorPlug />
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} lg={7}>
          <Preview images={product.images} />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Details
            id={product.id}
            title={product.title}
            description={product.description}
            tags={product.tags}
            inStock={product.instock}
            basePrice={product.basePrice}
            currentPrice={product.currentPrice}
            features={product.features}
            rating={product.rating}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductDetails
