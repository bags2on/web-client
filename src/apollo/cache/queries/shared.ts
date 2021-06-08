import { gql } from '@apollo/client'

export const GET_HEADER_DATA = gql`
  query GetHeaderData {
    cartAmount @client
    favoriteAmount @client
  }
`

export const GET_AUTH_MODAL_OPEN = gql`
  query GetAuthModalOpen {
    isAuthModalOpen @client
  }
`
