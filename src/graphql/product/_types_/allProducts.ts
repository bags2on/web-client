/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allProducts
// ====================================================

export interface allProducts_products {
  __typename: "Product";
  id: string;
  price: number;
  title: string;
  mainTag: string;
  preview: string;
}

export interface allProducts {
  products: allProducts_products[];
}
