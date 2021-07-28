import * as Types from '../../../types'

import { gql } from '@apollo/client'
export type ProductsByIdQueryVariables = Types.Exact<{
  input?: Types.Maybe<Array<Types.Scalars['String']> | Types.Scalars['String']>
}>

export type ProductsByIdQuery = {
  __typename?: 'Query'
  productsByID: Array<{
    __typename?: 'Product'
    id: string
    title: string
    instock: boolean
    currentPrice: number
    basePrice: number
    mainTag: Types.MainTag
    preview: string
  }>
}

export type ProductsByIdVariables = ProductsByIdQueryVariables
export type ProductsByIdProductsById = NonNullable<NonNullable<ProductsByIdQuery['productsByID']>[number]>

export const ProductsByIdDocument = gql`
  query ProductsByID($input: [String!]) {
    productsByID(input: $input) {
      id
      title
      instock
      currentPrice
      basePrice
      mainTag
      preview
    }
  }
`
