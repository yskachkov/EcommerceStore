import { combineReducers } from 'redux';

import { userReducer as user } from './user';
import { modalReducer as modal } from './modal';
import { mainReducer as main } from './main';
import { categoryReducer as category } from './category';
import { productReducer as product } from './product';
import { ordersReducer as orders } from './orders';
import { checkoutReducer as checkout } from './checkout';

export const rootReducer = combineReducers({
  user,
  modal,
  main,
  category,
  product,
  orders,
  checkout
});
