import { gql } from '@apollo/client'

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

export const GET_CART_AMOUNT = gql`
  query GetCartAmount {
    cartAmount @client
  }
`
