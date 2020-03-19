import { UPDATE_TEXT, UPDATE_TEXT_ASYNC, RESET_TEXT } from './actionTypes';

export const updateText = text => ({
  type: UPDATE_TEXT,
  payload: {
    text
  }
});

export const updateTextAsync = text => ({
  type: UPDATE_TEXT_ASYNC,
  payload: {
    text
  }
});

export const resetText = () => ({
  type: RESET_TEXT
});
