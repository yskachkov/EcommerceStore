import { takeEvery, call, put } from 'redux-saga/effects';
import { UPDATE_TEXT_ASYNC } from './actionTypes';
import { updateText } from './actions';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* updateTextAsync({ payload: { text } }) {
  yield call(delay, 2000);

  yield put(updateText(text));
}

export function* watchAsyncTextUpdate() {
  yield takeEvery(UPDATE_TEXT_ASYNC, updateTextAsync);
}
