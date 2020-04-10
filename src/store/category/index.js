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
          data: { byId, allIds }
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
        allIds: [...state.products.allIds, ...allIds]
      }
    }),
    clearProducts: state => ({
      ...state,
      products: initialState.products
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
    })
  }
});

export const fetchCategoryData = createAction('category/fetchCategoryData');
export const refreshCategoryData = createAction('category/refreshCategoryData');

export const categoryReducer = reducer;
export const categoryActions = {
  ...actions,
  fetchCategoryData,
  refreshCategoryData
};
