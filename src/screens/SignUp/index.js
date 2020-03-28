import { withFormik } from 'formik';

import { formikConfig } from './formik';
import { SignUp } from './SignUp';

export default withFormik(formikConfig)(SignUp);
