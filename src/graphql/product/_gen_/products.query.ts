import * as Types from '../../../types'

import { gql } from '@apollo/client'
export type AllProductsQueryVariables = Types.Exact<{
  gender?: Types.Maybe<Array<Types.Maybe<Types.Gender>> | Types.Maybe<Types.Gender>>
  isHidden?: Types.Maybe<Types.Scalars['Boolean']>
  instock?: Types.Maybe<Types.Scalars['Boolean']>
  mainTag?: Types.Maybe<Types.MainTag>
  price?: Types.Maybe<Types.PriceRange>
  category?: Types.Maybe<Array<Types.Maybe<Types.CategoryType>> | Types.Maybe<Types.CategoryType>>
}>

export type AllProductsQuery = {
  __typename?: 'Query'
  allProducts: {
    __typename?: 'ProductsResponse'
    priceRange: { __typename?: 'PriceRangeType'; lt: number; gt: number }
    products: Array<{
      __typename?: 'Product'
      id: string
      title: string
      instock: boolean
      currentPrice: number
      basePrice: number
      mainTag: string
      preview: string
    }>
  }
}

export type AllProductsVariables = AllProductsQueryVariables
export type AllProductsAllProducts = NonNullable<AllProductsQuery['allProducts']>
export type AllProductsPriceRange = NonNullable<NonNullable<AllProductsQuery['allProducts']>['priceRange']>
export type AllProductsProducts = NonNullable<
  NonNullable<NonNullable<AllProductsQuery['allProducts']>['products']>[number]
>

export const AllProductsDocument = gql`
  query AllProducts(
    $gender: [Gender]
    $isHidden: Boolean = false
    $instock: Boolean
    $mainTag: MainTag
    $price: PriceRange
    $category: [CategoryType]
  ) {
    allProducts(
      filter: {
        gender: $gender
        isHidden: $isHidden
        instock: $instock
        mainTag: $mainTag
        price: $price
        category: $category
      }
    ) {
      priceRange {
        lt
        gt
      }
      products {
        id
        title
        instock
        currentPrice
        basePrice
        mainTag
        preview
      }
    }
  }
`
