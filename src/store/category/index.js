import { createAction, createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const { reducer, actions } = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateProducts: (state, { payload: { data } }) => ({
      ...state,
      products: data
    }),
    clearProducts: state => ({
      ...state,
      products: initialState.products
    })
  }
});

export const fetchData = createAction('category/fetchData');

export const categoryReducer = reducer;
export const categoryActions = {
  ...actions,
  fetchData
};
