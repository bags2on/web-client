import * as Types from '../../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetProductQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type GetProductQuery = {
  __typename?: 'Query'
  product?:
    | { __typename: 'NotFound'; message: string }
    | {
        __typename: 'Product'
        id: string
        title: string
        preview: string
        currentPrice: number
        basePrice: number
        tags: Array<string>
        amount: number
        gender: Types.Gender
        category: Types.CategoryType
        description: string
        images: Array<string>
        instock: boolean
      }
    | null
}

export const GetProductDocument = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      __typename
      ... on Product {
        id
        title
        preview
        currentPrice
        basePrice
        tags
        amount
        gender
        category
        description
        images
        instock
      }
      ... on NotFound {
        message
      }
    }
  }
`

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options)
}
export function useGetProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options)
}
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>
