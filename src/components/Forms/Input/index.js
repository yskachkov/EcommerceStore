import { compose } from 'redux';
import { connect } from 'formik';

import { withFormikField } from 'src/HOCs/withFormikField';
import { Input } from './Input';

export const FormInput = compose(connect, withFormikField)(Input);
