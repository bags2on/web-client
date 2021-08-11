export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Upload: any
}

export type CartItem = {
  id: Scalars['String']
  amount: Scalars['Int']
}

export enum CategoryType {
  Bag = 'BAG',
  Other = 'OTHER',
  Wallet = 'WALLET',
  Backpack = 'BACKPACK',
  Suitcase = 'SUITCASE'
}

export type DeleteProductResponse = {
  __typename?: 'DeleteProductResponse'
  message: Scalars['String']
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Unisex = 'UNISEX'
}

export type HideProductResponse = {
  __typename?: 'HideProductResponse'
  isHidden: Scalars['Boolean']
}

export enum MainTag {
  Stock = 'STOCK',
  New = 'NEW',
  Top = 'TOP',
  Regular = 'REGULAR'
}

export type Mutation = {
  __typename?: 'Mutation'
  createOrder?: Maybe<OrderResponse>
  createProduct?: Maybe<NewProductResponse>
  updateProduct?: Maybe<UpdateProductResponse>
  deleteProduct?: Maybe<DeleteProductResponse>
  hideProduct?: Maybe<HideProductResponse>
}

export type MutationCreateOrderArgs = {
  input?: Maybe<OrderInput>
}

export type MutationCreateProductArgs = {
  input: NewProductInput
}

export type MutationUpdateProductArgs = {
  input?: Maybe<UpdateProductInput>
}

export type MutationDeleteProductArgs = {
  id: Scalars['ID']
}

export type MutationHideProductArgs = {
  id: Scalars['ID']
  isHidden: Scalars['Boolean']
}

export type NewProductInput = {
  title: Scalars['String']
  amount: Scalars['Int']
  basePrice: Scalars['Int']
  currentPrice?: Maybe<Scalars['Int']>
  gender: Gender
  instock: Scalars['Boolean']
  mainTag: MainTag
  category: CategoryType
  description?: Maybe<Scalars['String']>
}

export type NewProductResponse = {
  __typename?: 'NewProductResponse'
  id: Scalars['ID']
}

export type NotFound = {
  __typename?: 'NotFound'
  message: Scalars['String']
}

export type OrderInput = {
  name: Scalars['String']
  surname: Scalars['String']
  email: Scalars['String']
  phone: Scalars['String']
  cityId: Scalars['String']
  postOfficeId: Scalars['String']
  cartItems: Array<CartItem>
}

export type OrderResponse = {
  __typename?: 'OrderResponse'
  message: Scalars['String']
}

export type PriceRange = {
  lt: Scalars['Int']
  gt: Scalars['Int']
}

export type PriceRangeType = {
  __typename?: 'PriceRangeType'
  lt: Scalars['Int']
  gt: Scalars['Int']
}

export type Product = {
  __typename?: 'Product'
  id: Scalars['ID']
  title: Scalars['String']
  isHidden: Scalars['Boolean']
  currentPrice: Scalars['Int']
  basePrice: Scalars['Int']
  amount: Scalars['Int']
  instock: Scalars['Boolean']
  gender: Gender
  category: CategoryType
  preview: Scalars['String']
  images: Array<Scalars['String']>
  tags: Array<Scalars['String']>
  mainTag: MainTag
  description: Scalars['String']
}

export type ProductFilter = {
  gender?: Maybe<Array<Maybe<Gender>>>
  isHidden?: Maybe<Scalars['Boolean']>
  instock?: Maybe<Scalars['Boolean']>
  mainTag?: Maybe<MainTag>
  price?: Maybe<PriceRange>
  category?: Maybe<Array<Maybe<CategoryType>>>
}

export type ProductResult = Product | NotFound

export type ProductsResponse = {
  __typename?: 'ProductsResponse'
  products: Array<Product>
  priceRange: PriceRangeType
}

export type Query = {
  __typename?: 'Query'
  product?: Maybe<ProductResult>
  allProducts: ProductsResponse
  cartProducts: Array<Product>
  productsByID: Array<Product>
}

export type QueryProductArgs = {
  id: Scalars['ID']
}

export type QueryAllProductsArgs = {
  filter: ProductFilter
}

export type QueryCartProductsArgs = {
  input?: Maybe<Array<CartItem>>
}

export type QueryProductsByIdArgs = {
  input?: Maybe<Array<Scalars['String']>>
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UpdateProductInput = {
  id: Scalars['ID']
  title: Scalars['String']
  amount: Scalars['Int']
  basePrice: Scalars['Int']
  currentPrice?: Maybe<Scalars['Int']>
  gender: Gender
  instock: Scalars['Boolean']
  mainTag: MainTag
  category: CategoryType
  description?: Maybe<Scalars['String']>
}

export type UpdateProductResponse = {
  __typename?: 'UpdateProductResponse'
  message: Scalars['String']
}

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    ProductResult: ['Product', 'NotFound']
  }
}
export default result