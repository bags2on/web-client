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

export const REMOVE_PRODUCT_FROM_CART = gql`
  mutation RemoveProductFromCart($id: String!) {
    removeFromCart(id: $id) @client
  }
`
// TODO: rename
export const UPDATE_CART_TOTALS = gql`
  mutation UpdateTotalCartPrice($input: Number!) {
    updateCartTotalPrice(input: $input) @client
  }
`

export const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart @client
  }
`

export const SYNC_CART_FROM_STORAGE = gql`
  mutation SyncCartFromStorage {
    syncCartWithLocalStorage @client
  }
`
