import { connect } from 'react-redux';

import { getState } from 'src/store/user/selectors';
import { userActions } from 'src/store/user';
import { modalActions } from 'src/store/modal';
import { Navigator } from './Navigator';

const mapStateToProps = state => ({
  user: getState(state)
});

const mapActionCreatorsToProps = {
  ...userActions,
  ...modalActions
};

export const AppNavigator = connect(mapStateToProps, mapActionCreatorsToProps)(Navigator);
