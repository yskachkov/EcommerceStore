import get from 'lodash/get';
import find from 'lodash/find';

const normalizeProducts = products =>
  products.map(({ key, name: title, price, total, quantity, thumb }) => ({
    id: `${key}`,
    title,
    price,
    total,
    quantity,
    imageUri: `http:${thumb}`
  }));

export const extractCheckoutData = ({ products, totals }) => ({
  products: normalizeProducts(products),
  total: get(find(totals, { id: 'total' }), 'text', '$00.00'),
  totalQuantity: products.reduce((total, { quantity }) => total + quantity, 0)
});
