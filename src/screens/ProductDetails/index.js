import { connect } from 'react-redux';

import {
  getProductDetails,
  getLoading as getProductDetailsLoading
} from 'src/store/product/selectors';
import { productActions } from 'src/store/product';
import { addProductToCart } from 'src/store/checkout';
import { ProductDetails } from './ProductDetails';

const mapStateToProps = state => ({
  data: getProductDetails(state),
  loading: getProductDetailsLoading(state)
});

const mapActionCreatorsToProps = {
  ...productActions,
  addProductToCart
};

export const ProductDetailsScreen = connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(ProductDetails);
