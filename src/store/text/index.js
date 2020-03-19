import { initialState } from './initialState';
import { UPDATE_TEXT, RESET_TEXT } from './actionTypes';

export const textReducer = (state = initialState, { type: actionType, payload: actionPayload }) => {
  switch (actionType) {
    case UPDATE_TEXT:
      const { text } = actionPayload;

      return text;

    case RESET_TEXT:
      return initialState;

    default:
      return state;
  }
};
