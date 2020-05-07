import { HttpService, Session } from 'src/services';

class AuthenticationController {
  baseURL = 'account';

  signIn({ login, password }) {
    const requestData = new FormData();

    requestData.append('loginname', login);
    requestData.append('password', password);

    return HttpService({
      method: 'post',
      url: `${this.baseURL}/login`,
      data: requestData
    });
  }

  updateToken(token) {
    return Session.updateToken(token);
  }

  restoreToken() {
    return Session.getToken();
  }

  clearToken() {
    return Session.clearToken();
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
