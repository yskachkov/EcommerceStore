import { compose } from 'redux';
import { connect } from 'react-redux';

import { getState } from 'src/store/user/selectors';
import { getOrderList, getOrdersLoading } from 'src/store/orders/selectors';
import { ordersActions } from 'src/store/orders';
import { withProtectedScreen } from 'src/HOCs';
import { Orders } from './Orders';

const mapStateToProps = state => ({
  user: getState(state),
  list: getOrderList(state),
  loading: getOrdersLoading(state)
});

const mapActionCreatorsToProps = {
  ...ordersActions
};

export const OrdersScreen = compose(
  connect(mapStateToProps, mapActionCreatorsToProps),
  withProtectedScreen
)(Orders);
