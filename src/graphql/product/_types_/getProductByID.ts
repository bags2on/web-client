/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProductByID
// ====================================================

export interface getProductByID_product {
  __typename: "Product";
  id: string;
  title: string;
  price: number;
  tags: string[] | null;
  images: string[] | null;
  description: string;
  availability: boolean;
}

export interface getProductByID {
  product: getProductByID_product | null;
}

export interface getProductByIDVariables {
  id: string;
}
