import { Alert } from 'react-native';
import { takeLatest, call, put } from 'redux-saga/effects';
import get from 'lodash/get';

import { Products } from 'src/controllers';
import { productActions } from './';

function* fetchProductDetails({ payload: { productId } }) {
  yield put(productActions.startLoading());

  try {
    const {
      data: { name: title, price, special, description, thumbnail }
    } = yield call([Products, 'getProductDetails'], productId);

    yield put(
      productActions.updateDetails({
        data: {
          title,
          description,
          price: special || price,
          oldPrice: special ? price : null,
          imageUris: [`http:${thumbnail}`]
        }
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', error);

    yield call(Alert.alert, 'Product details fetch error', errorMessage);
  } finally {
    yield put(productActions.endLoading());
  }
}

export function* productSaga() {
  yield takeLatest(productActions.fetchProductDetails.type, fetchProductDetails);
}
