/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productsByID
// ====================================================

export interface productsByID_productsByID {
  __typename: "Product";
  id: string;
  title: string;
  price: number;
  amount: number;
  preview: string;
}

export interface productsByID {
  productsByID: productsByID_productsByID[];
}

export interface productsByIDVariables {
  ids?: string[] | null;
}
