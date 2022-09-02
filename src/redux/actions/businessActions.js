import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import BusinessController from "../controllers/businessController";

export const types = {
  GET_BUSINESSES: "GET_BUSINESSES",
  GET_BUSINESS: "GET_BUSINESS",
  SET_BUSINESS: "SET_BUSINESS",
  GET_BUSINESS_CATEGORIES: "GET_BUSINESS_CATEGORIES",
  SET_BUSINESS_CATEGORIES: "SET_BUSINESS_CATEGORIES",
  GET_BUSINESS_ELEMENTS: "GET_BUSINESS_ELEMENTS",
  SET_BUSINESS_ELEMENTS: "SET_BUSINESS_ELEMENTS",
  SET_BUSINESSES: "SET_BUSINESSES",
  CREATE_BUSINESS: "CREATE_BUSINESS",
  UPDATE_BUSINESS: "UPDATE_BUSINESS",
  DELETE_BUSINESS: "DELETE_BUSINESS",
  SET_ORDERS: "SET_ORDERS",
};

export const getBusiness = createAsyncThunk(
  types.GET_BUSINESS,
  async (_, { dispatch }) => {
    const response = await BusinessController.getBusiness();
    dispatch(setBusiness(response));
    return response;
  }
);

export const getBusinessCategories = createAsyncThunk(
  types.GET_BUSINESS_CATEGORIES,
  async (_, { dispatch }) => {
    const response = await BusinessController.getBusinessCategories();
    dispatch(setBusinessCategories(response));
    return response;
  }
);
export const getBusinessElements = createAsyncThunk(
  types.GET_BUSINESS_ELEMENTS,
  async ({ payload }, { dispatch }) => {
    const response = await BusinessController.getBusinessByParam(payload);
    dispatch(setBusinessElements(response));
    return response;
  }
);
export const createBusiness = createAsyncThunk(
  types.CREATE_BUSINESS,
  async ({ payload }, { dispatch }) => {
    try {
      await BusinessController.postBusiness(payload);
      const response = await BusinessController.getBusiness();
      dispatch(setBusiness(response));
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const updateBusiness = createAsyncThunk(
  types.UPDATE_BUSINESS,
  async ({ payload }, { dispatch }) => {
    try {
      await BusinessController.putBusiness(payload);
      const response = await BusinessController.getBusiness();
      dispatch(setBusinesses(response));
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const deleteBusiness = createAsyncThunk(
  types.DELETE_BUSINESS,
  async ({ payload }, { dispatch }) => {
    try {
      await BusinessController.deleteBusiness(payload);
      const response = await BusinessController.getBusiness();
      return response;
    } catch (err) {
      throw err;
    }
  }
);

export const setBusiness = createAction(types.SET_BUSINESS, (business) => ({
  payload: business,
}));

export const setBusinesses = createAction(
  types.SET_BUSINESSES,
  (businesses) => ({
    payload: businesses,
  })
);

export const setBusinessCategories = createAction(
  types.SET_BUSINESS_CATEGORIES,
  (categories) => ({
    payload: categories,
  })
);

export const setBusinessElements = createAction(
  types.SET_BUSINESS_ELEMENTS,
  (elements) => ({
    payload: elements,
  })
);

export const setOrders = createAction(types.SET_ORDERS, (orders) => ({
  payload: orders,
}));
