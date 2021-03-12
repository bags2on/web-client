/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateOrder
// ====================================================

export interface CreateOrder_createOrder {
  __typename: "OrderResponse";
  message: string;
}

export interface CreateOrder {
  createOrder: CreateOrder_createOrder | null;
}

export interface CreateOrderVariables {
  name: string;
  surname: string;
  email: string;
  phone: string;
  cityId: string;
  postOfficeId: string;
  productsId: string[];
}
