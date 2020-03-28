import React, { memo } from 'react';
import { TextInput } from 'react-native';
import isEqual from 'lodash/isEqual';

import { colors } from 'src/assets/styles/colors';

export const Input = memo(
  ({ placeholderTextColor = colors.black, onChangeValue, ...props }) => (
    <TextInput
      {...props}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeValue}
    />
  ),
  ({ value: previousValue }, { value }) => isEqual(previousValue, value)
);

Input.displayName = 'Input';
