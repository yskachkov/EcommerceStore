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
    })
  }
});

export const fetchData = createAction('product/fetchData');

export const productReducer = reducer;
export const productActions = {
  ...actions,
  fetchData
};
