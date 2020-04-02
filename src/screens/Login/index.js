import { withFormik } from 'formik';

import { formikConfig } from './formik';
import { Login } from './Login';

export const LoginScreen = withFormik(formikConfig)(Login);
