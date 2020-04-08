import { connect } from 'react-redux';

import { getCategories, getCategoriesSections } from 'src/store/main/selectors';
import { fetchData } from 'src/store/main';
import { Main } from './Main';

const mapStateToProps = state => ({
  categories: getCategories(state),
  sections: getCategoriesSections(state)
});

const mapActionCreatorsToProps = {
  fetchData
};

export const MainScreen = connect(mapStateToProps, mapActionCreatorsToProps)(Main);
