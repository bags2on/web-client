import React from 'react'
import { useParams } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import ScaleLoader from '../../common/loaders/ScaleLoader'
import PreviewBox from './PreviewBox/PreviewBox'
import Summary from './Summary/Summary'

const GET_PRODUCT_BY_ID = gql`
  query getProductByID($id: ID!) {
    product(id: $id) {
      id
      title
      price
      images
    }
  }
`

const ProductDetails: React.FC = () => {
  const { id } = useParams()

  const { loading, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
    fetchPolicy: 'network-only' // temp props
  })

  if (loading) {
    return <ScaleLoader />
  }

  const { product } = data

  console.log(product)

  return (
    <div>
      <PreviewBox images={product.images} />
      <Summary title={product.title} />
    </div>
  )
}

export default ProductDetails
