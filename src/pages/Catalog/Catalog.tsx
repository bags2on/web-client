import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import ScaleLoader from '../../common/loaders/ScaleLoader'

const GET_ALL_PRODUCTS = gql`
  {
    products {
      id
      title
      images
    }
  }
`

const Catalog: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS)

  console.log(data)

  if (loading) {
    return (
      <ScaleLoader />
    )
  }

  return (
    <div>
      <p>Catalog</p>
      <code>
        {JSON.stringify(data.products)}
      </code>
    </div>
  )
}

export default Catalog
