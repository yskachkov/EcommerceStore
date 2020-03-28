import { withFormik } from 'formik';

import { formikConfig } from './formik';
import { Login } from './Login';

export default withFormik(formikConfig)(Login);
