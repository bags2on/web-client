import * as Types from '../../../types'

import { gql } from '@apollo/client'
export type AllProductsQueryVariables = Types.Exact<{ [key: string]: never }>

export type AllProductsQuery = {
  __typename?: 'Query'
  products: Array<{
    __typename?: 'Product'
    id: string
    price: number
    title: string
    mainTag: string
    preview: string
  }>
}

export type AllProductsVariables = AllProductsQueryVariables
export type AllProductsProducts = NonNullable<NonNullable<AllProductsQuery['products']>[number]>

export const AllProductsDocument = gql`
  query allProducts {
    products {
      id
      price
      title
      mainTag
      preview
    }
  }
`
