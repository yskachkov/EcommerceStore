import isEmpty from 'lodash/isEmpty';

import { Storage } from 'src/services';

class SessionService {
  _token = null;

  async getToken() {
    const token = this._token;

    if (!isEmpty(token)) {
      return token;
    }

    const restoredToken = await Storage.get('userToken');

    this.setToken(restoredToken);

    return restoredToken;
  }

  setToken(token) {
    this._token = token;
  }

  async updateToken(token) {
    const setResult = await Storage.set('userToken', token);

    this.setToken(token);

    return setResult;
  }

  async clearToken() {
    const removeResult = await Storage.remove('userToken');

    this.setToken(null);

    return removeResult;
  }
}

export const Session = new SessionService();
