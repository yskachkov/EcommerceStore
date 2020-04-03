import { connect } from 'react-redux';

import { getUser } from 'src/store/user/selectors';
import { userActions } from 'src/store/user';

const mapStateToProps = state => ({
  user: getUser(state)
});

const mapActionCreatorsToProps = {
  ...userActions
};

export const withUser = connect(mapStateToProps, mapActionCreatorsToProps);
