import { HttpService } from 'src/services';

class OrdersController {
  baseURL = 'account';

  getOrderHistory(token) {
    const requestData = new FormData();

    requestData.append('token', token);

    return HttpService({
      method: 'post',
      url: `${this.baseURL}/history`,
      data: requestData
    });
  }
}

export const Orders = new OrdersController();
