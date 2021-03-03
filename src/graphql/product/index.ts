import { gql } from 'apollo-boost'

/* --- Queries --- */

export const GET_PRODUCTS = gql`
  query allProducts {
    products {
      id
      price
      title
      preview
    }
  }
`

export const GET_PRODUCTS_BY_IDS = gql`
  query productsByID($ids: [String!]) {
    productsByID(ids: $ids) {
      id
      title
      price
      amount
      preview
    }
  }
`

export const GET_PRODUCT_BY_ID = gql`
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

/* --- Mutations --- */
