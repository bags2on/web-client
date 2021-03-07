import { gql } from 'apollo-boost'

/* --- Queries --- */

export const CREATE_ORDER = gql`
  mutation CreateProduct(
    $name: String!
    $surname: String!
    $email: String!
    $phone: String!
    $cityId: String!
    $postOfficeId: String!
    $productsId: [String!]!
  ) {
    cartIDs @client @export(as: "productsId")
    createOrder(
      input: {
        name: $name
        surname: $surname
        email: $email
        phone: $phone
        cityId: $cityId
        postOfficeId: $postOfficeId
        productsId: $productsId
      }
    ) {
      message
    }
  }
`