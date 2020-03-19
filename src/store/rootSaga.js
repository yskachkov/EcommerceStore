import { all } from 'redux-saga/effects';

import { watchAsyncTextUpdate } from './text/saga';

export function* rootSaga() {
  yield all([watchAsyncTextUpdate()]);
}
