import { connect } from 'react-redux';

import {
  getCategoriesList,
  getCategoryIds,
  getCategoriesSections,
  getCategoriesLoading,
  getProductsLoading
} from 'src/store/main/selectors';
import { mainActions } from 'src/store/main';
import { Main } from './Main';

const mapStateToProps = state => ({
  categories: getCategoriesList(state),
  categoryIds: getCategoryIds(state),
  categorySections: getCategoriesSections(state),
  loadingCategories: getCategoriesLoading(state),
  loadingProducts: getProductsLoading(state)
});

const mapActionCreatorsToProps = {
  ...mainActions
};

export const MainScreen = connect(mapStateToProps, mapActionCreatorsToProps)(Main);
