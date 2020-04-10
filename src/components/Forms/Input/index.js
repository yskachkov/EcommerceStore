import { compose } from 'redux';
import { connect } from 'formik';

import { withFormikField } from 'src/HOCs';
import { Input } from './Input';

export * from './Input';

export const FormInput = compose(connect, withFormikField)(Input);
