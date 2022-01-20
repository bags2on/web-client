import { gql } from '@apollo/client'

export const GET_HEADER_DATA = gql`
  query GetHeaderData {
    cartAmount @client
    favoriteAmount @client
  }
`
