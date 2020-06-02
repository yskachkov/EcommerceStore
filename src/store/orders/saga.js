import { Alert } from 'react-native';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import get from 'lodash/get';

import { getState } from 'src/store/user/selectors';
import { Orders } from 'src/controllers';
import { ordersActions } from './';

function* fetchOrderHistory() {
  yield put(ordersActions.startLoading());

  const { token } = yield select(getState);

  try {
    const {
      data: { orders }
    } = yield call([Orders, 'getOrderHistory'], token);

    const orderList = orders.map(
      ({ order_id: id, date_added: date, status, products: productAmount, total }) => ({
        id,
        date,
        status,
        productAmount,
        total
      })
    );

    yield put(
      ordersActions.updateOrderList({
        data: orderList
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', error);

    yield call(Alert.alert, 'Order history fetch error', errorMessage);
  } finally {
    yield put(ordersActions.endLoading());
  }
}

function* refreshOrderHistory() {
  yield put(ordersActions.clearOrderHistory());

  yield* fetchOrderHistory();
}

export function* ordersSaga() {
  yield takeLatest(ordersActions.fetchOrderHistory.type, fetchOrderHistory);
  yield takeLatest(ordersActions.refreshOrderHistory.type, refreshOrderHistory);
}
