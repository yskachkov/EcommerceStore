import { createSelector } from '@reduxjs/toolkit';

export const getState = state => state.category;

export const getProductsState = state => getState(state).products;

export const getProductsList = state => getProductsState(state).byId;

export const getProductsIds = state => getProductsState(state).allIds;

export const getProductsLoading = state => getProductsState(state).loading;

export const getProductFilter = state => getState(state).productFilter;

export const getProductsTotal = state => getProductFilter(state).total;

export const getProducts = createSelector(
  [getProductsList, getProductsIds],
  (productList, productIds) => productIds.map(id => productList[id])
);
