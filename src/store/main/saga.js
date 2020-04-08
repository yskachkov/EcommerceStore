import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import unescape from 'lodash/unescape';

import { Products } from 'src/controllers';
import { getCategories } from './selectors';
import { mainActions } from './';

function* fetchCategories() {
  try {
    const {
      data: { subcategories }
    } = yield call([Products, 'getCategoriesList']);

    const categories = subcategories.reduce((categoriesList, { category_id: id, name, thumb }) => {
      categoriesList.set(id, {
        id,
        thumb,
        name: unescape(name)
      });

      return categoriesList;
    }, new Map());

    yield put(
      mainActions.updateCategories({
        data: categories
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', `Main fetchCategories error:\n${error}`);

    yield call(alert, errorMessage);
  }
}

function* fetchCategoryProducts({ categoryId, limit }) {
  try {
    const {
      data: { rows }
    } = yield call([Products, 'getCategoryProducts'], {
      category_id: categoryId,
      rows: limit
    });

    const products = rows.reduce((productList, { id, cell: { name, price, special, thumb } }) => {
      productList.set(id, {
        id,
        name,
        price: special || price,
        oldPrice: special ? price : null,
        thumb: `http:${thumb}`,
        categoryId
      });

      return productList;
    }, new Map());

    yield put(
      mainActions.updateProducts({
        data: products
      })
    );
  } catch (error) {
    const errorMessage = get(
      error,
      'response.data.error',
      `Main fetchCategoryProducts error:\n${error}`
    );

    yield call(alert, errorMessage);
  }
}

function* fetchProducts(limit) {
  const categories = yield select(getCategories);

  if (isEmpty(categories)) {
    return;
  }

  const productCategoryIds = [...categories.values()].map(({ id }) => id);

  yield all(
    productCategoryIds.map(categoryId =>
      call(fetchCategoryProducts, {
        categoryId,
        limit
      })
    )
  );
}

function* fetchData({ payload: { sectionLimit } }) {
  // TODO: loading
  yield* fetchCategories();
  yield* fetchProducts(sectionLimit);
}

export function* mainSaga() {
  yield takeLatest(mainActions.fetchData.type, fetchData);
}
