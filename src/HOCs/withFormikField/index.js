import React, { memo, useCallback } from 'react';
import isEqual from 'lodash/isEqual';

import { getComponentDisplayName } from 'src/utils/displayName';

export const withFormikField = FormField => {
  const WithFormikField = memo(
    ({ name, formik: { values, handleChange }, ...props }) => {
      const handleFieldChange = useCallback(text => handleChange(name)(text), [name, handleChange]);

      return (
        <FormField {...props} name={name} value={values[name]} onChangeValue={handleFieldChange} />
      );
    },
    ({ formik: { values: previousValues } }, { formik: { values }, name }) =>
      isEqual(previousValues[name], values[name])
  );

  WithFormikField.displayName = `withFormikField(${getComponentDisplayName(FormField)})`;

  return WithFormikField;
};
