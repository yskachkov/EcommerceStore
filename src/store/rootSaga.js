import { all } from 'redux-saga/effects';

import { authenticationSaga } from './user/saga';

export function* rootSaga() {
  yield all([authenticationSaga()]);
}
