import { HttpService, Session } from 'src/services';

class AuthenticationController {
  baseURL = 'account';

  signIn({ login, password }) {
    const userData = new FormData();

    userData.append('loginname', login);
    userData.append('password', password);

    return HttpService({
      method: 'post',
      url: `${this.baseURL}/login`,
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
    const requestData = new FormData();

    requestData.append('token', token);

    return HttpService({
      method: 'post',
      url: `${this.baseURL}/login`,
      data: requestData
    });
  }
}

export const Authentication = new AuthenticationController();
