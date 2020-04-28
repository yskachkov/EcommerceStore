import { Alert } from 'react-native';
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import unescape from 'lodash/unescape';
import last from 'lodash/last';

import { Products } from 'src/controllers';
import { Entities } from './config';
import { getCategoryIds, getFilter } from './selectors';
import { mainActions } from './';

function* fetchCategories() {
  const entity = Entities.Categories;

  yield put(
    mainActions.startLoading({
      entity
    })
  );

  try {
    const {
      data: { subcategories: categories }
    } = yield call([Products, 'getCategoriesList']);

    const categoriesById = {};
    const allCategories = [];

    categories.forEach(({ category_id: id, name, thumb }) => {
      categoriesById[id] = {
        id,
        title: unescape(name),
        imageUri: `http:${thumb}`
      };

      allCategories.push(id);
    });

    yield put(
      mainActions.updateData({
        entity,
        data: {
          byId: categoriesById,
          allIds: allCategories
        }
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', error);

    yield call(Alert.alert, 'Categories fetch error', errorMessage);
  } finally {
    yield put(
      mainActions.endLoading({
        entity
      })
    );
  }
}

function* fetchCategoryProducts({ categoryId, productLimit }) {
  try {
    const {
      data: { rows: products }
    } = yield call([Products, 'getCategoryProducts'], {
      category_id: categoryId,
      rows: productLimit
    });

    const productsById = {};
    const allProducts = [];

    products.forEach(({ id, cell: { name: title, price, special, thumb } }) => {
      productsById[id] = {
        id,
        title,
        price: special || price,
        oldPrice: special ? price : null,
        imageUri: `http:${thumb}`,
        categoryId
      };

      allProducts.push(id);
    });

    yield put(
      mainActions.updateData({
        entity: Entities.Products,
        data: {
          byId: productsById,
          allIds: allProducts
        }
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', error);

    yield call(Alert.alert, 'Products fetch error', errorMessage);
  }
}

function* fetchProducts({ payload: { categorySectionsLimit, sectionProductLimit: productLimit } }) {
  const entity = Entities.Products;
  const state = yield select();

  const allCategoryIds = getCategoryIds(state);
  const { nextCategoryIds } = getFilter(state);

  const isNextCategoryIdsEmpty = isEmpty(nextCategoryIds);
  const categoryIds = isNextCategoryIdsEmpty
    ? allCategoryIds.slice(0, categorySectionsLimit)
    : nextCategoryIds;

  yield put(
    mainActions.startLoading({
      entity
    })
  );

  yield all(
    categoryIds.map(categoryId =>
      call(fetchCategoryProducts, {
        categoryId,
        productLimit
      })
    )
  );

  yield put(
    mainActions.endLoading({
      entity
    })
  );

  const nextStartCategoryIndex = allCategoryIds.indexOf(last(nextCategoryIds)) + 1;

  const nextCategoriesSliceStartIndex = isNextCategoryIdsEmpty
    ? categorySectionsLimit
    : nextStartCategoryIndex;
  const nextCategoriesSliceEndIndex = isNextCategoryIdsEmpty
    ? categorySectionsLimit * 2
    : nextStartCategoryIndex + categorySectionsLimit;

  yield put(
    mainActions.updateFilter({
      nextCategoryIds: allCategoryIds.slice(
        nextCategoriesSliceStartIndex,
        nextCategoriesSliceEndIndex
      )
    })
  );
}

function* fetchCategoriesData(action) {
  yield* fetchCategories();
  yield* fetchProducts(action);
}

function* refreshCategoriesData(action) {
  yield put(
    mainActions.updateFilter({
      nextCategoryIds: []
    })
  );

  yield put(
    mainActions.resetData({
      entity: Entities.Categories
    })
  );

  yield put(
    mainActions.resetData({
      entity: Entities.Products
    })
  );

  yield* fetchCategoriesData(action);
}

export function* mainSaga() {
  yield takeLatest(mainActions.fetchCategoriesData.type, fetchCategoriesData);
  yield takeLatest(mainActions.fetchProducts.type, fetchProducts);
  yield takeLatest(mainActions.refreshCategoriesData.type, refreshCategoriesData);
}
