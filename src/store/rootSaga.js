import { all } from 'redux-saga/effects';

import { authenticationSaga } from './user/saga';
import { mainSaga } from './main/saga';
import { categorySaga } from './category/saga';
import { productSaga } from './product/saga';

export function* rootSaga() {
  yield all([authenticationSaga(), mainSaga(), categorySaga(), productSaga()]);
}
