import { createAction, createSlice } from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';

import { initialState } from './initialState';

const { reducer, actions } = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateCategories: (state, { payload: { data } }) => ({
      ...state,
      categories: data
    }),
    updateProducts: (state, { payload: { data } }) => {
      const products = new Map([...(isEmpty(state.products) ? [] : state.products), ...data]);

      return {
        ...state,
        products
      };
    }
  }
});

export const fetchData = createAction('main/fetchData');

export const mainReducer = reducer;
export const mainActions = {
  ...actions,
  fetchData
};
