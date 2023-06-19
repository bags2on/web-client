import * as Types from '../../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetProductByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type GetProductByIdQuery = {
  __typename?: 'Query'
  product?:
    | { __typename: 'NotFound'; message: string }
    | {
        __typename: 'Product'
        id: string
        title: string
        currentPrice: number
        basePrice: number
        tags: Array<string>
        images: Array<string>
        description: string
        instock: boolean
        features: {
          __typename?: 'ProductFeatures'
          material: string
          color: string
          gender: Types.Gender
          category: Types.CategoryType
        }
        rating: { __typename?: 'AttachedRating'; rating: number }
      }
    | null
}

export const GetProductByIdDocument = gql`
  query getProductByID($id: ID!) {
    product(id: $id) {
      __typename
      ... on Product {
        id
        title
        currentPrice
        basePrice
        tags
        images
        description
        instock
        features {
          material
          color
          gender
          category
        }
        rating {
          rating
        }
      }
      ... on NotFound {
        message
      }
    }
  }
`

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(
    GetProductByIdDocument,
    options
  )
}
export function useGetProductByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(
    GetProductByIdDocument,
    options
  )
}
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>
export type GetProductByIdQueryResult = Apollo.QueryResult<
  GetProductByIdQuery,
  GetProductByIdQueryVariables
>
