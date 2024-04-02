import * as Types from '../../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetHomeDataQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetHomeDataQuery = {
  __typename?: 'Query'
  homeData?: {
    __typename?: 'HomeDataResponse'
    sliderData: Array<{
      __typename?: 'HomeMainSlide'
      actionURL: string
      imageURL: string
      color: string
    }>
    featuredProducts: Array<{
      __typename?: 'Product'
      id: string
      title: string
      slug: string
      tag?: Types.ProductTag | null
      currentPrice: number
      basePrice: number
      preview: string
    }>
  } | null
}

export const GetHomeDataDocument = gql`
  query GetHomeData {
    homeData {
      sliderData {
        actionURL
        imageURL
        color
      }
      featuredProducts {
        id
        title
        slug
        tag
        currentPrice
        basePrice
        preview
      }
    }
  }
`

/**
 * __useGetHomeDataQuery__
 *
 * To run a query within a React component, call `useGetHomeDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeDataQuery(
  baseOptions?: Apollo.QueryHookOptions<GetHomeDataQuery, GetHomeDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetHomeDataQuery, GetHomeDataQueryVariables>(GetHomeDataDocument, options)
}
export function useGetHomeDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetHomeDataQuery, GetHomeDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetHomeDataQuery, GetHomeDataQueryVariables>(
    GetHomeDataDocument,
    options
  )
}
export function useGetHomeDataSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetHomeDataQuery, GetHomeDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetHomeDataQuery, GetHomeDataQueryVariables>(
    GetHomeDataDocument,
    options
  )
}
export type GetHomeDataQueryHookResult = ReturnType<typeof useGetHomeDataQuery>
export type GetHomeDataLazyQueryHookResult = ReturnType<typeof useGetHomeDataLazyQuery>
export type GetHomeDataSuspenseQueryHookResult = ReturnType<typeof useGetHomeDataSuspenseQuery>
export type GetHomeDataQueryResult = Apollo.QueryResult<GetHomeDataQuery, GetHomeDataQueryVariables>
