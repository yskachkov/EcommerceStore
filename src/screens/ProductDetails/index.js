import { connect } from 'react-redux';

import { getProductDetails, getProductDetailsLoading } from 'src/store/product/selectors';
import { productActions } from 'src/store/product';
import { ProductDetails } from './ProductDetails';

const mapStateToProps = state => ({
  data: getProductDetails(state),
  loading: getProductDetailsLoading(state)
});

const mapActionCreatorsToProps = {
  ...productActions
};

export const ProductDetailsScreen = connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(ProductDetails);
