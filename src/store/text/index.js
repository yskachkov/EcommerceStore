import { createAction, createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { prepareTextPayload } from './utils';

const text = createSlice({
  name: 'text',
  initialState,
  reducers: {
    updateText: {
      reducer: (state, { payload: { text: updatedText } }) => updatedText,
      prepare: prepareTextPayload
    },
    resetText: () => initialState
  }
});

export const updateTextAsync = createAction('text/updateTextAsync', prepareTextPayload);

export const textReducer = text.reducer;
export const textActions = {
  ...text.actions,
  updateTextAsync
};
