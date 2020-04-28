import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';

import { getState } from 'src/store/user/selectors';
import { userActions } from 'src/store/user';
import { formikConfig } from './formik';
import { Login } from './Login';

const mapStateToProps = state => ({
  user: getState(state)
});

const mapActionCreatorsToProps = {
  ...userActions
};

export const LoginScreen = compose(
  connect(mapStateToProps, mapActionCreatorsToProps),
  withFormik(formikConfig)
)(Login);
