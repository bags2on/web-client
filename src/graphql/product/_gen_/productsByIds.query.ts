import * as Types from '../../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ProductsByIdQueryVariables = Types.Exact<{
  ids: Array<Types.Scalars['ID']['input']> | Types.Scalars['ID']['input']
}>

export type ProductsByIdQuery = {
  __typename?: 'Query'
  productsByID: Array<{
    __typename?: 'Product'
    id: string
    title: string
    inStock: boolean
    currentPrice: number
    basePrice: number
    tag?: Types.ProductTag | null
    preview: string
  }>
}

export const ProductsByIdDocument = gql`
  query ProductsByID($ids: [ID!]!) {
    productsByID(ids: $ids) {
      id
      title
      inStock
      currentPrice
      basePrice
      tag
      preview
    }
  }
`

/**
 * __useProductsByIdQuery__
 *
 * To run a query within a React component, call `useProductsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useProductsByIdQuery(
  baseOptions: Apollo.QueryHookOptions<ProductsByIdQuery, ProductsByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProductsByIdQuery, ProductsByIdQueryVariables>(
    ProductsByIdDocument,
    options
  )
}
export function useProductsByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductsByIdQuery, ProductsByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProductsByIdQuery, ProductsByIdQueryVariables>(
    ProductsByIdDocument,
    options
  )
}
export function useProductsByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsByIdQuery, ProductsByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ProductsByIdQuery, ProductsByIdQueryVariables>(
    ProductsByIdDocument,
    options
  )
}
export type ProductsByIdQueryHookResult = ReturnType<typeof useProductsByIdQuery>
export type ProductsByIdLazyQueryHookResult = ReturnType<typeof useProductsByIdLazyQuery>
export type ProductsByIdSuspenseQueryHookResult = ReturnType<typeof useProductsByIdSuspenseQuery>
export type ProductsByIdQueryResult = Apollo.QueryResult<
  ProductsByIdQuery,
  ProductsByIdQueryVariables
>
