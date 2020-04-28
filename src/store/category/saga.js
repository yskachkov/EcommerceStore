import { Alert } from 'react-native';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import get from 'lodash/get';

import { Products } from 'src/controllers';
import { getProductFilter } from './selectors';
import { categoryActions } from './';

function* fetchProducts({ payload: { categoryId, limit } }) {
  const { page } = yield select(getProductFilter);
  yield put(categoryActions.startProductsLoading());

  try {
    const {
      data: { rows: products, records: productsTotal }
    } = yield call([Products, 'getCategoryProducts'], {
      page,
      category_id: categoryId,
      rows: limit
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

    yield put(
      categoryActions.updateProductFilter({
        total: parseInt(productsTotal, 10),
        page: page + 1
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', error);

    yield call(Alert.alert, 'Products fetch error', errorMessage);
  } finally {
    yield put(categoryActions.endProductsLoading());
  }
}

function* refreshProducts(action) {
  yield put(categoryActions.clearProductsData());

  yield* fetchProducts(action);
}

export function* categorySaga() {
  yield takeLatest(categoryActions.fetchProducts.type, fetchProducts);
  yield takeLatest(categoryActions.refreshProducts.type, refreshProducts);
}
