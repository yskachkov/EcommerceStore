import { stringify } from 'query-string';

import { httpService } from 'src/services/httpService';

class ProductsController {
  baseURL = 'product';

  getCategoriesList() {
    return httpService({
      url: `${this.baseURL}/category&category_id=0`
    });
  }

  getCategoryProducts(filter) {
    return httpService({
      url: `${this.baseURL}/filter&${stringify(filter)}`
    });
  }

  getProductDetails(productId) {
    return httpService({
      url: `${this.baseURL}/product&product_id=${productId}`
    });
  }
}

export const Products = new ProductsController();
