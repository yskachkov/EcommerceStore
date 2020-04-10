import { connect } from 'react-redux';

import { getProducts, getProductsLoading } from 'src/store/category/selectors';
import { categoryActions } from 'src/store/category';
import { CategoryProducts } from './CategoryProducts';

const mapStateToProps = state => ({
  products: getProducts(state),
  loading: getProductsLoading(state)
});

const mapActionCreatorsToProps = {
  ...categoryActions
};

export const CategoryProductsScreen = connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(CategoryProducts);
