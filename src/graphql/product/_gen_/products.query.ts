import * as Types from '../../../types'

import { gql } from '@apollo/client'
export type AllProductsQueryVariables = Types.Exact<{
  gender?: Types.Maybe<Array<Types.Maybe<Types.Gender>> | Types.Maybe<Types.Gender>>
  instock?: Types.Maybe<Types.Scalars['Boolean']>
  mainTag?: Types.Maybe<Types.MainTag>
  price?: Types.Maybe<Types.PriceRange>
}>

export type AllProductsQuery = {
  __typename?: 'Query'
  products: Array<{
    __typename?: 'Product'
    id: string
    title: string
    instock: boolean
    price: number
    discount: number
    mainTag: string
    preview: string
  }>
}

export type AllProductsVariables = AllProductsQueryVariables
export type AllProductsProducts = NonNullable<NonNullable<AllProductsQuery['products']>[number]>

export const AllProductsDocument = gql`
  query allProducts($gender: [Gender], $instock: Boolean, $mainTag: MainTag, $price: PriceRange) {
    products(filter: { gender: $gender, instock: $instock, mainTag: $mainTag, price: $price }) {
      id
      title
      instock
      price
      discount
      mainTag
      preview
    }
  }
`
