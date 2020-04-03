import { compose } from 'redux';
import { withFormik } from 'formik';

import { withUser } from 'src/store/connectors';
import { formikConfig } from './formik';
import { Login } from './Login';

export const LoginScreen = compose(withUser, withFormik(formikConfig))(Login);
