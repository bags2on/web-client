import * as Types from '../../../types'

import { gql } from '@apollo/client'
export type ProductsByIDsQueryVariables = Types.Exact<{
  input?: Types.Maybe<Array<Types.CartItem> | Types.CartItem>
}>

export type ProductsByIDsQuery = {
  __typename?: 'Query'
  productsByID: Array<{
    __typename?: 'Product'
    id: string
    title: string
    currentPrice: number
    amount: number
    preview: string
  }>
}

export type ProductsByIDsVariables = ProductsByIDsQueryVariables
export type ProductsByIDsProductsById = NonNullable<NonNullable<ProductsByIDsQuery['productsByID']>[number]>

export const ProductsByIDsDocument = gql`
  query productsByIDs($input: [CartItem!]) {
    productsByID(input: $input) {
      id
      title
      currentPrice
      amount
      preview
    }
  }
`
