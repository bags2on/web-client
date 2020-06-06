import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import ScaleLoader from '../../shared/loaders/ScaleLoader'
import PreviewBox from './PreviewBox/PreviewBox'
import Summary from './Summary/Summary'

const GET_PRODUCT_BY_ID = gql`
  query getProductByID($id: ID!) {
    product(id: $id) {
      id
      title
      price
      tags
      images
      description
    }
  }
`

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

  console.log(product)

  const tmp = true

  return (
    <div>
      <PreviewBox id={product.id} images={product.images} />
      <Summary
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        tags={product.tags}
        inStock={tmp}
      />
    </div>
  )
}

export default ProductDetails
