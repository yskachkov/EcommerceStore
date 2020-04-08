import { combineReducers } from 'redux';

import { userReducer as user } from './user';
import { mainReducer as main } from './main';
import { categoryReducer as category } from './category';
import { productReducer as product } from './product';

export const rootReducer = combineReducers({
  user,
  main,
  category,
  product
});
