import { takeLatest, call, put } from 'redux-saga/effects';

import { textActions } from './';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* updateTextAsync({ payload: { text: updatedText } }) {
  yield call(delay, 2000);

  yield put(textActions.updateText(updatedText));
}

export function* watchAsyncTextUpdate() {
  yield takeLatest(textActions.updateTextAsync.type, updateTextAsync);
}
