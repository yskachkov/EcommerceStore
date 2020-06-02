import AsyncStorage from '@react-native-community/async-storage';
import isEmpty from 'lodash/isEmpty';

class SessionService {
  _token = null;

  async getToken() {
    const token = this._token;

    if (!isEmpty(token)) {
      return token;
    }

    const restoredToken = await AsyncStorage.getItem('userToken');

    this.setToken(restoredToken);

    return restoredToken;
  }

  setToken(token) {
    this._token = token;
  }

  async updateToken(token) {
    await AsyncStorage.setItem('userToken', token);

    this.setToken(token);
  }

  async clearToken() {
    await AsyncStorage.removeItem('userToken');

    this.setToken(null);
  }
}

export const Session = new SessionService();
