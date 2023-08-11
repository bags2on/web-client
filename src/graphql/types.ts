export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
  Upload: { input: any; output: any }
}

export type AttachedRating = {
  __typename?: 'AttachedRating'
  rating: Scalars['Float']['output']
}

export type CartItem = {
  amount: Scalars['Int']['input']
  productId: Scalars['String']['input']
}

export type CartItemType = {
  __typename?: 'CartItemType'
  amount: Scalars['Int']['output']
  id: Scalars['String']['output']
}

export enum CategoryType {
  Backpack = 'BACKPACK',
  Bag = 'BAG',
  Other = 'OTHER',
  Suitcase = 'SUITCASE',
  Wallet = 'WALLET'
}

export type DeleteProductResponse = {
  __typename?: 'DeleteProductResponse'
  message: Scalars['String']['output']
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Unisex = 'UNISEX'
}

export type HideProductResponse = {
  __typename?: 'HideProductResponse'
  isHidden: Scalars['Boolean']['output']
}

export type HomeDataResponse = {
  __typename?: 'HomeDataResponse'
  popular: Array<Product>
  recommended: Array<Product>
}

export type LogInInput = {
  keyWord: Scalars['String']['input']
}

export type LogInRsponse = {
  __typename?: 'LogInRsponse'
  token: Scalars['String']['output']
}

export enum MainTag {
  New = 'NEW',
  Regular = 'REGULAR',
  Stock = 'STOCK',
  Top = 'TOP'
}

export type Mutation = {
  __typename?: 'Mutation'
  createOrder?: Maybe<NewOrderResponse>
  createProduct?: Maybe<NewProductResponse>
  deleteProduct?: Maybe<DeleteProductResponse>
  hideProduct?: Maybe<HideProductResponse>
  productRatingVote?: Maybe<ProductRatingVoteResponse>
  updateProduct?: Maybe<UpdateProductResponse>
}

export type MutationCreateOrderArgs = {
  input: NewOrderInput
}

export type MutationCreateProductArgs = {
  input: NewProductInput
}

export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input']
}

export type MutationHideProductArgs = {
  id: Scalars['ID']['input']
  isHidden: Scalars['Boolean']['input']
}

export type MutationProductRatingVoteArgs = {
  input: ProductRatingVoteInput
}

export type MutationUpdateProductArgs = {
  input?: InputMaybe<UpdateProductInput>
}

export type NewOrderInput = {
  cartItems: Array<CartItem>
  cityId: Scalars['String']['input']
  email: Scalars['String']['input']
  name: Scalars['String']['input']
  phone: Scalars['String']['input']
  postOfficeId: Scalars['String']['input']
  supplier: Scalars['String']['input']
  surname: Scalars['String']['input']
}

export type NewOrderResponse = {
  __typename?: 'NewOrderResponse'
  message: Scalars['String']['output']
}

export type NewProductInput = {
  amount: Scalars['Int']['input']
  basePrice: Scalars['Int']['input']
  category: CategoryType
  currentPrice?: InputMaybe<Scalars['Int']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  features: ProductFeaturesInput
  gender: Gender
  instock: Scalars['Boolean']['input']
  mainTag: MainTag
  title: Scalars['String']['input']
}

export type NewProductResponse = {
  __typename?: 'NewProductResponse'
  id: Scalars['ID']['output']
}

export type NotFound = {
  __typename?: 'NotFound'
  message: Scalars['String']['output']
}

export type Order = {
  __typename?: 'Order'
  cartItems: Array<CartItemType>
  cityId: Scalars['String']['output']
  createdAt: Scalars['Date']['output']
  id: Scalars['ID']['output']
  postOfficeId: Scalars['String']['output']
  products: Array<Product>
  receiverEmail: Scalars['String']['output']
  receiverName: Scalars['String']['output']
  receiverPhone: Scalars['String']['output']
  receiverSurname: Scalars['String']['output']
  status: Scalars['String']['output']
  supplier: Scalars['String']['output']
}

export type OrderByIdResult = NotFound | Order

export type OrderFilter = {
  status: Scalars['String']['input']
}

export type Pagination = {
  __typename?: 'Pagination'
  currentPage: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
}

export type PriceRange = {
  gt: Scalars['Int']['input']
  lt: Scalars['Int']['input']
}

export type PriceRangeType = {
  __typename?: 'PriceRangeType'
  gt: Scalars['Int']['output']
  lt: Scalars['Int']['output']
}

export type Product = {
  __typename?: 'Product'
  amount: Scalars['Int']['output']
  basePrice: Scalars['Int']['output']
  category: CategoryType
  currentPrice: Scalars['Int']['output']
  description: Scalars['String']['output']
  features: ProductFeatures
  gender: Gender
  id: Scalars['ID']['output']
  images: Array<Scalars['String']['output']>
  instock: Scalars['Boolean']['output']
  isHidden: Scalars['Boolean']['output']
  mainTag: MainTag
  preview: Scalars['String']['output']
  rating: AttachedRating
  slug: Scalars['String']['output']
  tags: Array<Scalars['String']['output']>
  title: Scalars['String']['output']
}

export type ProductFeatures = {
  __typename?: 'ProductFeatures'
  category: CategoryType
  color: Scalars['String']['output']
  gender: Gender
  material: Scalars['String']['output']
}

export type ProductFeaturesInput = {
  category: CategoryType
  color: Scalars['String']['input']
  gender: Gender
  material: Scalars['String']['input']
}

export type ProductFilter = {
  category?: InputMaybe<Array<InputMaybe<CategoryType>>>
  gender?: InputMaybe<Array<InputMaybe<Gender>>>
  instock?: InputMaybe<Scalars['Boolean']['input']>
  isHidden?: InputMaybe<Scalars['Boolean']['input']>
  mainTag?: InputMaybe<MainTag>
  page: Scalars['Int']['input']
  price?: InputMaybe<PriceRange>
}

export type ProductRatingVoteInput = {
  productId: Scalars['String']['input']
  rating: Scalars['Int']['input']
}

export type ProductRatingVoteResponse = {
  __typename?: 'ProductRatingVoteResponse'
  isSaved: Scalars['Boolean']['output']
}

export type ProductResult = NotFound | Product

export type ProductsResponse = {
  __typename?: 'ProductsResponse'
  pagination: Pagination
  priceRange: PriceRangeType
  products: Array<Product>
}

export type Query = {
  __typename?: 'Query'
  allOrders: Array<Order>
  allProducts: ProductsResponse
  cartProducts: Array<Product>
  homeData?: Maybe<HomeDataResponse>
  logInRoot?: Maybe<LogInRsponse>
  order?: Maybe<OrderByIdResult>
  product?: Maybe<ProductResult>
  productsByID: Array<Product>
  searchProductByName: Array<Product>
}

export type QueryAllOrdersArgs = {
  input: OrderFilter
}

export type QueryAllProductsArgs = {
  filter: ProductFilter
}

export type QueryCartProductsArgs = {
  input: Array<CartItem>
}

export type QueryLogInRootArgs = {
  input: LogInInput
}

export type QueryOrderArgs = {
  id: Scalars['ID']['input']
}

export type QueryProductArgs = {
  id: Scalars['ID']['input']
}

export type QueryProductsByIdArgs = {
  input?: InputMaybe<Array<Scalars['String']['input']>>
}

export type QuerySearchProductByNameArgs = {
  input: Scalars['String']['input']
}

export enum Role {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER'
}

export type UpdateProductInput = {
  amount: Scalars['Int']['input']
  basePrice: Scalars['Int']['input']
  category: CategoryType
  currentPrice: Scalars['Int']['input']
  description?: InputMaybe<Scalars['String']['input']>
  features: ProductFeaturesInput
  gender: Gender
  id: Scalars['ID']['input']
  instock: Scalars['Boolean']['input']
  mainTag: MainTag
  title: Scalars['String']['input']
}

export type UpdateProductResponse = {
  __typename?: 'UpdateProductResponse'
  message: Scalars['String']['output']
}

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    OrderByIdResult: ['NotFound', 'Order'],
    ProductResult: ['NotFound', 'Product']
  }
}
export default result
