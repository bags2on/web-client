import { gql } from 'apollo-boost'

/* --- Queries --- */

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`

export const GET_CART_TOTAL_SUMM = gql`
  query GetCartTotalSumm {
    cartTotalPrice @client
  }
`

/* --- Mutations --- */

// TODO: rename
export const UPDATE_CART_TOTALS = gql`
  mutation UpdateTotalCartPrice($input: Number!) {
    updateCartTotalPrice(input: $input) @client
  }
`
