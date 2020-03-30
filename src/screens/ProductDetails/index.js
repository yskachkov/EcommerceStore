import { ProductDetails } from './ProductDetails';

export const dummyProduct = {
  title: 'Xiaomi Mi A3',
  oldPrice: 244,
  price: 222,
  discount: 9,
  colors: ['blue'],
  description:
    '48+8+2MP AI triple rear camera with portrait mode, HDR, PDAF supported | 32MP front camera with f2.0, 1/2.8 inch pixel size, portrait mode, HDR supported'
};

export const dummyImages = [
  {
    id: '1',
    source: { uri: 'https://via.placeholder.com/180x240/318CBF/FFFFFF/?text=Product image 1' },
    style: { width: 180, height: 240 }
  },
  {
    id: '2',
    source: { uri: 'https://via.placeholder.com/180x240/318CBF/FFFFFF/?text=Product image 2' },
    style: { width: 180, height: 240 }
  }
];

export default ProductDetails;
