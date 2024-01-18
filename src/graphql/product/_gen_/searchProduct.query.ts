import * as Types from '../../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SearchProductQueryVariables = Types.Exact<{
  input: Types.Scalars['String']['input']
}>

export type SearchProductQuery = {
  __typename?: 'Query'
  searchProductByName: Array<{
    __typename?: 'Product'
    id: string
    title: string
    instock: boolean
    mainTag?: Types.MainTag | null
    preview: string
  }>
}

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

/**
 * __useSearchProductQuery__
 *
 * To run a query within a React component, call `useSearchProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchProductQuery(
  baseOptions: Apollo.QueryHookOptions<SearchProductQuery, SearchProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchProductQuery, SearchProductQueryVariables>(
    SearchProductDocument,
    options
  )
}
export function useSearchProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchProductQuery, SearchProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SearchProductQuery, SearchProductQueryVariables>(
    SearchProductDocument,
    options
  )
}
export function useSearchProductSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<SearchProductQuery, SearchProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<SearchProductQuery, SearchProductQueryVariables>(
    SearchProductDocument,
    options
  )
}
export type SearchProductQueryHookResult = ReturnType<typeof useSearchProductQuery>
export type SearchProductLazyQueryHookResult = ReturnType<typeof useSearchProductLazyQuery>
export type SearchProductSuspenseQueryHookResult = ReturnType<typeof useSearchProductSuspenseQuery>
export type SearchProductQueryResult = Apollo.QueryResult<
  SearchProductQuery,
  SearchProductQueryVariables
>
