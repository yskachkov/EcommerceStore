import AsyncStorage from '@react-native-community/async-storage';

import { httpService } from 'src/services/httpService';

class AuthenticationController {
  baseURL = 'account';

  signIn({ login, password }) {
    const userData = new FormData();

    userData.append('loginname', login);
    userData.append('password', password);

    return httpService({
      url: `${this.baseURL}/login`,
      method: 'post',
      data: userData
    });
  }

  updateToken(token) {
    return AsyncStorage.setItem('userToken', token);
  }

  restoreToken() {
    return AsyncStorage.getItem('userToken');
  }

  authenticate(token) {
    const authenticationData = new FormData();

    authenticationData.append('token', token);

    return httpService({
      url: `${this.baseURL}/login`,
      method: 'post',
      data: authenticationData
    });
  }
}

export const Authentication = new AuthenticationController();
