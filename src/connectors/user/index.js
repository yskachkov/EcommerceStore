import { connect } from 'react-redux';

import { getState } from 'src/store/user/selectors';
import { userActions } from 'src/store/user';

const mapStateToProps = state => ({
  user: getState(state)
});

const mapActionCreatorsToProps = {
  ...userActions
};

export const withUser = connect(mapStateToProps, mapActionCreatorsToProps);
