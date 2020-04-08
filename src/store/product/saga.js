import { takeLatest, call, put } from 'redux-saga/effects';
import get from 'lodash/get';

import { Products } from 'src/controllers';
import { productActions } from './';

function* fetchData({ payload: { productId } }) {
  try {
    const {
      data: { thumbnail, name, price, special, description }
    } = yield call([Products, 'getProductDetails'], productId);

    yield put(
      productActions.updateDetails({
        data: {
          name,
          description,
          price: special || price,
          oldPrice: special ? price : null,
          images: [`http:${thumbnail}`]
        }
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', `Product fetchData error:\n${error}`);

    yield call(alert, errorMessage);
  }
}

export function* productSaga() {
  // TODO: loading
  yield takeLatest(productActions.fetchData.type, fetchData);
}
