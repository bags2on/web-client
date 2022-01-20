import { gql } from '@apollo/client'

export const GET_FAVORITE_AMOUNT = gql`
  query GetFavoriteAmount {
    favoriteAmount @client
  }
`
