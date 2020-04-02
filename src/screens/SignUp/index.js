import { withFormik } from 'formik';

import { formikConfig } from './formik';
import { SignUp } from './SignUp';

export const SignUpScreen = withFormik(formikConfig)(SignUp);
