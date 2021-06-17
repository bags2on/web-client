import * as Types from '../../../types'

import { gql } from '@apollo/client'
export type CartProductsQueryVariables = Types.Exact<{
  input?: Types.Maybe<Array<Types.CartItem> | Types.CartItem>
}>

export type CartProductsQuery = {
  __typename?: 'Query'
  cartProducts: Array<{
    __typename?: 'Product'
    id: string
    title: string
    currentPrice: number
    amount: number
    preview: string
  }>
}

export type CartProductsVariables = CartProductsQueryVariables
export type CartProductsCartProducts = NonNullable<NonNullable<CartProductsQuery['cartProducts']>[number]>

export const CartProductsDocument = gql`
  query CartProducts($input: [CartItem!]) {
    cartProducts(input: $input) {
      id
      title
      currentPrice
      amount
      preview
    }
  }
`
