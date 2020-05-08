import { Alert } from 'react-native';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import get from 'lodash/get';
import find from 'lodash/find';

import { getState } from 'src/store/user/selectors';
import { ModalName } from 'src/components/Modal/config';
import { Toasts, PushNotification } from 'src/services';
import { Checkout } from 'src/controllers';
import { modalActions } from 'src/store/modal';
import { extractCheckoutData } from './utils';
import { checkoutActions } from './';

function* fetchCheckoutData() {
  yield put(checkoutActions.startLoading());

  const { token } = yield select(getState);

  try {
    const { data } = yield call([Checkout, 'getCartProducts'], token);

    yield put(
      checkoutActions.updateCheckoutData({
        data: extractCheckoutData(data)
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', error);

    yield call(Alert.alert, 'Checkout fetch error', errorMessage);
  } finally {
    yield put(checkoutActions.endLoading());
  }
}

function* addProductToCart({ payload: { id } }) {
  yield call(Toasts.show, 'Adding product...');

  yield put(checkoutActions.startLoading());

  const { token } = yield select(getState);

  try {
    const { data } = yield call([Checkout, 'addProductToCart'], { token, id });

    const checkoutData = extractCheckoutData(data);

    yield put(
      checkoutActions.updateCheckoutData({
        data: checkoutData
      })
    );

    yield put(
      modalActions.showModal({
        name: ModalName.ProductAction,
        modalProps: {
          title: 'Product added to your cart'
        }
      })
    );

    const { title } = find(checkoutData.products, { id });

    yield call([PushNotification, 'show'], {
      title: 'New product in cart',
      message: title
    });
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', error);

    yield call(Alert.alert, 'Product addition fetch error', errorMessage);
  } finally {
    yield call(Toasts.hide);

    yield put(checkoutActions.endLoading());
  }
}

function* removeProductFromCart({ payload: { id } }) {
  yield call(console.log, `Remove product: ${id}`);
}

function* completeOrder({ payload: { onSuccess } }) {
  const { token } = yield select(getState);

  try {
    yield call([Checkout, 'clearCart'], token);

    yield put(checkoutActions.clearCheckoutData());

    yield call(onSuccess);
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', error);

    yield call(Alert.alert, 'Order completion error', errorMessage);
  }
}

function* refreshCheckoutData() {
  yield put(checkoutActions.clearCheckoutData());

  yield* fetchCheckoutData();
}

export function* checkoutSaga() {
  yield takeLatest(checkoutActions.fetchCheckoutData.type, fetchCheckoutData);
  yield takeLatest(checkoutActions.addProductToCart.type, addProductToCart);
  yield takeLatest(checkoutActions.removeProductFromCart.type, removeProductFromCart);
  yield takeLatest(checkoutActions.completeOrder.type, completeOrder);
  yield takeLatest(checkoutActions.refreshCheckoutData.type, refreshCheckoutData);
}
