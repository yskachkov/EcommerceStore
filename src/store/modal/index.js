import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const { reducer, actions } = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, { payload: { name, modalProps = {} } }) => ({
      ...state,
      name,
      modalProps: {
        ...state.modalProps,
        ...modalProps
      },
      isVisible: true
    }),
    closeModal: state => ({
      ...state,
      ...initialState
    })
  }
});

export const modalReducer = reducer;
export const modalActions = actions;
