import { createAction, createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const { reducer, actions } = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateDetails: (state, { payload: { data } }) => ({
      ...state,
      details: data
    }),
    clearDetails: state => ({
      ...state,
      details: initialState.details
    }),
    startLoading: state => ({
      ...state,
      loading: true
    }),
    endLoading: state => ({
      ...state,
      loading: false
    })
  }
});

export const fetchProductDetails = createAction('product/fetchProductDetails');

export const productReducer = reducer;
export const productActions = {
  ...actions,
  fetchProductDetails
};
