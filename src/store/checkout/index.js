import { createAction, createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const { reducer, actions } = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateCheckoutData: (state, { payload: { data } }) => ({
      ...state,
      ...data
    }),
    clearCheckoutData: state => ({
      ...state,
      ...initialState
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

export const fetchCheckoutData = createAction('checkout/fetchCheckoutData');
export const refreshCheckoutData = createAction('checkout/refreshCheckoutData');
export const addProductToCart = createAction('checkout/addProductToCart');
export const removeProductFromCart = createAction('checkout/removeProductFromCart');
export const completeOrder = createAction('checkout/completeOrder');

export const checkoutReducer = reducer;
export const checkoutActions = {
  ...actions,
  fetchCheckoutData,
  refreshCheckoutData,
  addProductToCart,
  removeProductFromCart,
  completeOrder
};
