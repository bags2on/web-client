import * as Types from '../../types'

import { gql } from '@apollo/client'
export type SearchProductQueryVariables = Types.Exact<{
  input: Types.Scalars['String']
}>

export type SearchProductQuery = {
  __typename?: 'Query'
  searchProductByName: Array<{
    __typename?: 'Product'
    id: string
    title: string
    instock: boolean
    mainTag: Types.MainTag
    preview: string
  }>
}

export type SearchProductVariables = SearchProductQueryVariables
export type SearchProductSearchProductByName = NonNullable<
  NonNullable<SearchProductQuery['searchProductByName']>[number]
>

export const SearchProductDocument = gql`
  query SearchProduct($input: String!) {
    searchProductByName(input: $input) {
      id
      title
      instock
      mainTag
      preview
    }
  }
`
