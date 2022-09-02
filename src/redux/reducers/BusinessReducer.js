import { createReducer } from "@reduxjs/toolkit";

import * as businessActions from "../actions/businessActions";

const initialState = {
  businesses: [],
  business: {},
  categories: [],
  elements: [],
  orders: [],
};

const BusinessReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(businessActions.setBusinesses, (state, { payload }) => ({
      ...state,
      businesses: payload,
    }))
    .addCase(businessActions.setBusiness, (state, { payload }) => ({
      ...state,
      business: payload,
    }))
    .addCase(businessActions.setBusinessCategories, (state, { payload }) => ({
      ...state,
      categories: payload,
    }))
    .addCase(businessActions.setBusinessElements, (state, { payload }) => ({
      ...state,
      elements: payload,
    }))
    .addCase(businessActions.setOrders, (state, { payload }) => ({
      ...state,
      orders: payload,
    }));
});

export default BusinessReducer;
