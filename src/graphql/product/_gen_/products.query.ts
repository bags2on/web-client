import * as Types from '../../types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AllProductsQueryVariables = Types.Exact<{
  gender?: Types.InputMaybe<Array<Types.Gender> | Types.Gender>
  isHidden?: Types.InputMaybe<Types.Scalars['Boolean']['input']>
  instock?: Types.InputMaybe<Types.Scalars['Boolean']['input']>
  tag?: Types.InputMaybe<Types.ProductTag>
  price?: Types.InputMaybe<Types.PriceRange>
  category?: Types.InputMaybe<Array<Types.CategoryType> | Types.CategoryType>
  page: Types.Scalars['Int']['input']
}>

export type AllProductsQuery = {
  __typename?: 'Query'
  products: {
    __typename?: 'ProductsResponse'
    priceRange: { __typename?: 'PriceRangeType'; gt: number; lt: number }
    pagination: { __typename?: 'Pagination'; totalPages: number; currentPage: number }
    products: Array<{
      __typename?: 'Product'
      id: string
      slug: string
      title: string
      inStock: boolean
      currentPrice: number
      basePrice: number
      tag?: Types.ProductTag | null
      preview: string
    }>
  }
}

export const AllProductsDocument = gql`
  query AllProducts(
    $gender: [Gender!]
    $isHidden: Boolean = false
    $instock: Boolean
    $tag: ProductTag
    $price: PriceRange
    $category: [CategoryType!]
    $page: Int!
  ) {
    products(
      filter: {
        gender: $gender
        isHidden: $isHidden
        instock: $instock
        tag: $tag
        price: $price
        category: $category
        page: $page
      }
    ) {
      priceRange {
        gt
        lt
      }
      pagination {
        totalPages
        currentPage
      }
      products {
        id
        slug
        title
        inStock
        currentPrice
        basePrice
        tag
        preview
      }
    }
  }
`

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *      gender: // value for 'gender'
 *      isHidden: // value for 'isHidden'
 *      instock: // value for 'instock'
 *      tag: // value for 'tag'
 *      price: // value for 'price'
 *      category: // value for 'category'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useAllProductsQuery(
  baseOptions: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options)
}
export function useAllProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(
    AllProductsDocument,
    options
  )
}
export function useAllProductsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<AllProductsQuery, AllProductsQueryVariables>(
    AllProductsDocument,
    options
  )
}
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>
export type AllProductsSuspenseQueryHookResult = ReturnType<typeof useAllProductsSuspenseQuery>
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>
