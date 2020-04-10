import { createAction, createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const { reducer, actions } = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateData: (
      state,
      {
        payload: {
          entity,
          data: { byId, allIds }
        }
      }
    ) => ({
      ...state,
      [entity]: {
        ...state[entity],
        byId: {
          ...state[entity].byId,
          ...byId
        },
        allIds: [...state[entity].allIds, ...allIds]
      }
    }),
    resetData: (state, { payload: { entity } }) => ({
      ...state,
      [entity]: initialState[entity]
    }),
    updateFilter: (state, { payload }) => ({
      ...state,
      filter: {
        ...state.filter,
        ...payload
      }
    }),
    startLoading: (state, { payload: { entity } }) => ({
      ...state,
      [entity]: {
        ...state[entity],
        loading: true
      }
    }),
    endLoading: (state, { payload: { entity } }) => ({
      ...state,
      [entity]: {
        ...state[entity],
        loading: false
      }
    })
  }
});

export const fetchCategoriesData = createAction('main/fetchCategoriesData');
export const fetchProducts = createAction('main/fetchProducts');
export const refreshCategoriesData = createAction('main/refreshCategoriesData');

export const mainReducer = reducer;
export const mainActions = {
  ...actions,
  fetchCategoriesData,
  fetchProducts,
  refreshCategoriesData
};
