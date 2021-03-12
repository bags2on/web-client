/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProduct
// ====================================================

export interface CreateProduct_createOrder {
  __typename: "OrderResponse";
  message: string;
}

export interface CreateProduct {
  createOrder: CreateProduct_createOrder | null;
}

export interface CreateProductVariables {
  name: string;
  surname: string;
  email: string;
  phone: string;
  cityId: string;
  postOfficeId: string;
  productsId: string[];
}
