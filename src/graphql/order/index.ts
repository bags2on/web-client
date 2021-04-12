import { gql } from '@apollo/client'

export const CREATE_ORDER = gql`
  mutation CreateOrder(
    $name: String!
    $surname: String!
    $email: String!
    $phone: String!
    $cityId: String!
    $postOfficeId: String!
    $productsId: [CartItem!]!
  ) {
    cartItems @client @export(as: "productsId")
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
