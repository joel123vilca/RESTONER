import { createSelector } from "@reduxjs/toolkit";

export const businessStateSelector = createSelector(
  (state) => state.business,
  (business) => business
);

export const businessCategoriesSelector = createSelector(
  businessStateSelector,
  (state) => state.categories
);

export const businessCategoriesElements = createSelector(
  businessStateSelector,
  (state) => state.elements
);

export const businessSelector = createSelector(
  businessStateSelector,
  (state) => state.business
);

export const ordersSelector = createSelector(
  businessStateSelector,
  (state) => state.orders
);
