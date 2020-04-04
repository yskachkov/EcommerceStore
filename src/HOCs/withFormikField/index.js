import React, { memo, useCallback } from 'react';
import isEqual from 'lodash/isEqual';

import { getComponentDisplayName } from 'src/utils/displayName';

export const withFormikField = FormField => {
  const FormFieldWithFormik = memo(
    ({ name, formik: { values, handleChange }, ...props }) => {
      const handleFieldChange = useCallback(text => handleChange(name)(text), [name, handleChange]);

      return (
        <FormField {...props} name={name} value={values[name]} onChangeText={handleFieldChange} />
      );
    },
    ({ formik: { values: previousValues } }, { formik: { values }, name }) =>
      isEqual(previousValues[name], values[name])
  );

  FormFieldWithFormik.displayName = `withFormikField(${getComponentDisplayName(FormField)})`;

  return FormFieldWithFormik;
};
