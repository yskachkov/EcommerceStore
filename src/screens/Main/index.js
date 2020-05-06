import { connect } from 'react-redux';

import {
  getCategoriesList,
  getCategoryIds,
  getCategoriesSections,
  getCategoriesLoading,
  getProductsLoading
} from 'src/store/main/selectors';
import { mainActions } from 'src/store/main';
import { fetchCheckoutData } from 'src/store/checkout';
import { Main } from './Main';

const mapStateToProps = state => ({
  categories: getCategoriesList(state),
  categoryIds: getCategoryIds(state),
  categorySections: getCategoriesSections(state),
  loadingCategories: getCategoriesLoading(state),
  loadingProducts: getProductsLoading(state)
});

const mapActionCreatorsToProps = {
  ...mainActions,
  fetchCheckoutData
};

export const MainScreen = connect(mapStateToProps, mapActionCreatorsToProps)(Main);
