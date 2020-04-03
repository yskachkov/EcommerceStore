import { takeLatest, call, put } from 'redux-saga/effects';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import { Authentication } from 'src/controllers';
import { userActions } from './';

function* signIn({ payload: { login, password } }) {
  try {
    const {
      data: { token }
    } = yield call([Authentication, 'signIn'], {
      login,
      password
    });

    yield put(
      userActions.updateUser({
        token
      })
    );

    yield call([Authentication, 'updateToken'], token);
  } catch (error) {
    const errorMessage = get(error, 'data.error', `Sign-In error:\n${error}`);

    yield call(alert, errorMessage);
  }
}

function* authenticate() {
  yield put(userActions.toggleUserLoading());

  try {
    const userToken = yield call([Authentication, 'restoreToken']);

    if (isEmpty(userToken)) {
      return;
    }

    yield call([Authentication, 'authenticate'], userToken);

    yield put(
      userActions.updateUser({
        token: userToken
      })
    );
  } catch (error) {
    const errorMessage = get(error, 'data.error', `Authentication error:\n${error}`);

    yield call(alert, errorMessage);
  } finally {
    yield put(userActions.toggleUserLoading());
  }
}

export function* authenticationSaga() {
  yield takeLatest(userActions.signInUser.type, signIn);
  yield takeLatest(userActions.authenticateUser.type, authenticate);
}
