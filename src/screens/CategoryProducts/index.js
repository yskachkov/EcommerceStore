import { connect } from 'react-redux';

import { getProducts, getProductsLoading, getProductsTotal } from 'src/store/category/selectors';
import { categoryActions } from 'src/store/category';
import { CategoryProducts } from './CategoryProducts';

const mapStateToProps = state => ({
  products: getProducts(state),
  loading: getProductsLoading(state),
  productsTotal: getProductsTotal(state)
});

const mapActionCreatorsToProps = {
  ...categoryActions
};

export const CategoryProductsScreen = connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(CategoryProducts);
