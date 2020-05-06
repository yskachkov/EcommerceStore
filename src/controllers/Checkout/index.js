import { HttpService } from 'src/services';

class CheckoutController {
  baseURL = 'checkout';

  getCartProducts(token) {
    const requestData = new FormData();

    requestData.append('token', token);

    return HttpService({
      method: 'post',
      url: `${this.baseURL}/cart`,
      data: requestData
    });
  }

  addProductToCart({ id, token }) {
    const requestData = new FormData();

    requestData.append('token', token);
    requestData.append('product_id', id);
    requestData.append('quantity', 1);

    return HttpService({
      method: 'post',
      url: `${this.baseURL}/cart`,
      data: requestData
    });
  }

  clearCart(token) {
    const requestData = new FormData();

    requestData.append('token', token);
    requestData.append('remove_all', 'true');

    return HttpService({
      method: 'post',
      url: `${this.baseURL}/cart`,
      data: requestData
    });
  }
}

export const Checkout = new CheckoutController();
