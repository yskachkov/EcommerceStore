import { createAction, createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const { reducer, actions } = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    updateOrderList: (state, { payload: { data } }) => ({
      ...state,
      list: data
    }),
    clearOrders: state => ({
      ...state,
      list: initialState.list
    }),
    startLoading: state => ({
      ...state,
      loading: true
    }),
    endLoading: state => ({
      ...state,
      loading: false
    }),
    clearOrderHistory: state => ({
      ...state,
      ...initialState
    })
  }
});

export const fetchOrderHistory = createAction('orders/fetchOrderHistory');
export const refreshOrderHistory = createAction('orders/refreshOrderHistory');

export const ordersReducer = reducer;
export const ordersActions = {
  ...actions,
  fetchOrderHistory,
  refreshOrderHistory
};
