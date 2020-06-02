import { HttpService } from 'src/services';

class OrdersController {
  baseURL = 'account';

  getOrderHistory(token) {
    const authenticationData = new FormData();

    authenticationData.append('token', token);

    return HttpService({
      method: 'post',
      url: `${this.baseURL}/history`,
      data: authenticationData
    });
  }
}

export const Orders = new OrdersController();
