import { HttpService, Session } from 'src/services';

class AuthenticationController {
  baseURL = 'account';

  signIn({ login, password }) {
    const userData = new FormData();

    userData.append('loginname', login);
    userData.append('password', password);

    return HttpService({
      url: `${this.baseURL}/login`,
      method: 'post',
      data: userData
    });
  }

  updateToken(token) {
    Session.updateToken(token);
  }

  restoreToken() {
    return Session.getToken();
  }

  clearToken() {
    Session.clearToken();
  }

  authenticate(token) {
    const authenticationData = new FormData();

    authenticationData.append('token', token);

    return HttpService({
      url: `${this.baseURL}/login`,
      method: 'post',
      data: authenticationData
    });
  }
}

export const Authentication = new AuthenticationController();
