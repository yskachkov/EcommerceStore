import { connect } from 'react-redux';

import {
  getCategoriesList,
  getCategoryIds,
  getCategoriesSections,
  getCategoriesLoading,
  getProductsLoading
} from 'src/store/main/selectors';
import { fetchCategoriesData, fetchProducts, refreshCategoriesData } from 'src/store/main';
import { Main } from './Main';

const mapStateToProps = state => ({
  categories: getCategoriesList(state),
  categoryIds: getCategoryIds(state),
  categorySections: getCategoriesSections(state),
  loadingCategories: getCategoriesLoading(state),
  loadingProducts: getProductsLoading(state)
});

const mapActionCreatorsToProps = {
  fetchCategoriesData,
  fetchProducts,
  refreshCategoriesData
};

export const MainScreen = connect(mapStateToProps, mapActionCreatorsToProps)(Main);
