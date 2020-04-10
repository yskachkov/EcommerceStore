import { createSelector } from '@reduxjs/toolkit';

export const getProductsState = state => state.category.products;

export const getProductsList = state => getProductsState(state).byId;

export const getProductsIds = state => getProductsState(state).allIds;

export const getProductsLoading = state => getProductsState(state).loading;

export const getProducts = createSelector(
  [getProductsList, getProductsIds],
  (productList, productIds) => productIds.map(id => productList[id])
);
