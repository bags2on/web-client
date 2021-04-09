import { gql } from 'apollo-boost'

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`

export const GET_CART_PRICE = gql`
  query GetCartTotalSumm {
    cartPrice @client
  }
`
