import { takeLatest, call, put } from 'redux-saga/effects';
import get from 'lodash/get';

import { Products } from 'src/controllers';
import { categoryActions } from './';

function* fetchData({ payload: { categoryId } }) {
  try {
    const {
      data: { rows }
    } = yield call([Products, 'getCategoryProducts'], {
      category_id: categoryId
    });

    const products = rows.reduce((productList, { id, cell: { name, price, thumb } }) => {
      productList.set(id, {
        id,
        name,
        price,
        categoryId,
        thumb: `http:${thumb}`
      });

      return productList;
    }, new Map());

    yield put(
      categoryActions.updateProducts({
        data: products
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', `Category fetchData error:\n${error}`);

    yield call(alert, errorMessage);
  }
}

export function* categorySaga() {
  // TODO: loading
  yield takeLatest(categoryActions.fetchData.type, fetchData);
}
