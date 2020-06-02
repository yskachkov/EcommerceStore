import { stringify } from 'query-string';

import { HttpService } from 'src/services';

class ProductsController {
  baseURL = 'product';

  getCategoriesList() {
    return HttpService({
      url: `${this.baseURL}/category&category_id=0`
    });
  }

  getCategoryProducts(filter) {
    return HttpService({
      url: `${this.baseURL}/filter&${stringify(filter)}`
    });
  }

  getProductDetails(productId) {
    return HttpService({
      url: `${this.baseURL}/product&product_id=${productId}`
    });
  }
}

export const Products = new ProductsController();
