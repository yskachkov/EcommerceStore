import { connect } from 'react-redux';

import { getProductDetails } from 'src/store/product/selectors';
import { productActions } from 'src/store/product';
import { ProductDetails } from './ProductDetails';

const mapStateToProps = state => ({
  data: getProductDetails(state)
});

const mapActionCreatorsToProps = {
  ...productActions
};

export const ProductDetailsScreen = connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(ProductDetails);
