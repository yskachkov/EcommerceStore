import { takeLatest, call, put } from 'redux-saga/effects';
import get from 'lodash/get';

import { Products } from 'src/controllers';
import { categoryActions } from './';

function* fetchCategoryData({ payload: { categoryId } }) {
  yield put(categoryActions.startProductsLoading());

  try {
    const {
      data: { rows: products }
    } = yield call([Products, 'getCategoryProducts'], {
      category_id: categoryId
    });

    const productsById = {};
    const allProducts = [];

    products.forEach(({ id, cell: { name, price, thumb } }) => {
      productsById[id] = {
        id,
        name,
        price,
        categoryId,
        thumb: `http:${thumb}`
      };

      allProducts.push(id);
    });

    yield put(
      categoryActions.updateProducts({
        data: {
          byId: productsById,
          allIds: allProducts
        }
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', `Category fetchData error:\n${error}`);

    yield call(alert, errorMessage);
  } finally {
    yield put(categoryActions.endProductsLoading());
  }
}

function* refreshCategoryData(action) {
  yield put(categoryActions.clearProducts());

  yield* fetchCategoryData(action);
}

export function* categorySaga() {
  yield takeLatest(categoryActions.fetchCategoryData.type, fetchCategoryData);
  yield takeLatest(categoryActions.refreshCategoryData.type, refreshCategoryData);
}
