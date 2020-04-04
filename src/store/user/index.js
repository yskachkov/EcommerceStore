import { createAction, createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, { payload: { token } }) => ({
      ...state,
      token
    }),
    userLoadingStart: state => ({
      ...state,
      loading: true
    }),
    userLoadingEnd: state => ({
      ...state,
      loading: false
    })
  }
});

export const signInUser = createAction('user/signInUser');
export const authenticateUser = createAction('user/authenticateUser');

export const userReducer = reducer;
export const userActions = {
  ...actions,
  signInUser,
  authenticateUser
};
