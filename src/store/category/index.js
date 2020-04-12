import { createAction, createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const { reducer, actions } = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateProducts: (
      state,
      {
        payload: {
          data: { byId, allIds, total }
        }
      }
    ) => ({
      ...state,
      products: {
        ...state.products,
        byId: {
          ...state.products.byId,
          ...byId
        },
        allIds: [...state.products.allIds, ...allIds],
        total: total || state.total
      }
    }),
    clearProductsData: state => ({
      ...state,
      products: initialState.products,
      productFilter: initialState.productFilter
    }),
    startProductsLoading: state => ({
      ...state,
      products: {
        ...state.products,
        loading: true
      }
    }),
    endProductsLoading: state => ({
      ...state,
      products: {
        ...state.products,
        loading: false
      }
    }),
    updateProductFilter: (state, { payload }) => ({
      ...state,
      productFilter: {
        ...state.productFilter,
        ...payload
      }
    })
  }
});

export const fetchProducts = createAction('category/fetchProducts');
export const refreshProducts = createAction('category/refreshProducts');

export const categoryReducer = reducer;
export const categoryActions = {
  ...actions,
  fetchProducts,
  refreshProducts
};
