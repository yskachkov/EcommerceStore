import { Alert } from 'react-native';
import { takeLatest, call, put } from 'redux-saga/effects';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import { Authentication } from 'src/controllers';
import { userActions } from './';

function* signIn({ payload: { login, password } }) {
  yield put(userActions.startSignInLoading());

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
    const errorMessage = get(error, 'response.data.error', error);

    yield call(Alert.alert, 'Sign-In error', errorMessage);
  } finally {
    yield put(userActions.endSignInLoading());
  }
}

function* authenticate() {
  yield put(userActions.startAuthenticationLoading());

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
    const errorMessage = get(error, 'response.data.error', `Authentication error:\n${error}`);

    yield call(console.log, errorMessage);
  } finally {
    yield put(userActions.endAuthenticationLoading());
  }
}

export function* authenticationSaga() {
  yield takeLatest(userActions.signInUser.type, signIn);
  yield takeLatest(userActions.authenticateUser.type, authenticate);
}
