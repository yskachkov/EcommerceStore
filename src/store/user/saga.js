import { takeLatest, call, put } from 'redux-saga/effects';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import { Authentication } from 'src/controllers';
import { modalActions } from 'src/store/modal';
import { ModalName } from 'src/components/Modal/config';
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

    yield call(Authentication.updateToken, token);
  } catch (error) {
    const errorMessage = get(error, 'response.data.error', error);

    yield put(
      modalActions.showModal({
        name: ModalName.SignInError,
        modalProps: {
          title: 'Sign in error',
          text: errorMessage
        }
      })
    );
  } finally {
    yield put(userActions.endSignInLoading());
  }
}

function* authenticate() {
  yield put(userActions.startAuthenticationLoading());

  try {
    const userToken = yield call(Authentication.restoreToken);

    if (isEmpty(userToken)) {
      return;
    }

    yield call([Authentication, 'authenticate'], userToken);

    yield put(
      userActions.updateUser({
        token: userToken
      })
    );
  } catch {
    yield call(Authentication.clearToken);
  } finally {
    yield put(userActions.endAuthenticationLoading());
  }
}

export function* authenticationSaga() {
  yield takeLatest(userActions.signInUser.type, signIn);
  yield takeLatest(userActions.authenticateUser.type, authenticate);
}
