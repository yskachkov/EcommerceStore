import Keychain from 'react-native-keychain';
import isEmpty from 'lodash/isEmpty';

import { name as appName } from 'app.json';

class SessionService {
  _token = null;

  async getToken() {
    const token = this._token;

    if (!isEmpty(token)) {
      return token;
    }

    const { password: restoredToken = null } = await Keychain.getGenericPassword();

    this.setToken(restoredToken);

    return restoredToken;
  }

  setToken(token) {
    this._token = token;
  }

  async updateToken(token) {
    await Keychain.setGenericPassword(appName, token);

    this.setToken(token);
  }

  async clearToken() {
    await Keychain.resetGenericPassword();

    this.setToken(null);
  }
}

export const Session = new SessionService();
