import { compose } from 'redux';
import { connect } from 'react-redux';

import { getState } from 'src/store/user/selectors';
import {
  getCartProducts,
  getCartTotal,
  getCartTotalQuantity,
  getLoading
} from 'src/store/checkout/selectors';
import { checkoutActions } from 'src/store/checkout';
import { withProtectedScreen } from 'src/HOCs';
import { Cart } from './Cart';

const mapStateToProps = state => ({
  user: getState(state),
  products: getCartProducts(state),
  total: getCartTotal(state),
  totalQuantity: getCartTotalQuantity(state),
  loading: getLoading(state)
});

const mapActionCreatorsToProps = {
  ...checkoutActions
};

export const CartScreen = compose(
  connect(mapStateToProps, mapActionCreatorsToProps),
  withProtectedScreen
)(Cart);
