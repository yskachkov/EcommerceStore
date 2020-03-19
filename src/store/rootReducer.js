import { combineReducers } from 'redux';
import { textReducer as text } from './text';

export const rootReducer = combineReducers({
  text
});
