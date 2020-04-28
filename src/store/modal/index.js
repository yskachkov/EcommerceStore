import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const { reducer, actions } = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, { payload: { name } }) => ({
      ...state,
      name,
      isVisible: true
    }),
    closeModal: state => ({
      ...state,
      name: '',
      isVisible: false
    })
  }
});

export const modalReducer = reducer;
export const modalActions = actions;
