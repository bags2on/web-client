import { gql } from '@apollo/client'

export const GET_FAVORITE_IDS = gql`
  query GetFavoriteIds {
    favoriteIds @client
  }
`

export const GET_FAVORITE_AMOUNT = gql`
  query GetFavoriteAmount {
    favoriteAmount @client
  }
`
