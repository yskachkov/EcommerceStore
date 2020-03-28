import React, { memo, useMemo } from 'react';
import { View, Text, TextInput } from 'react-native';
import isArray from 'lodash/isArray';
import isEqual from 'lodash/isEqual';

import { colors } from 'src/assets/styles/colors';
import styles from './Input.styles';

export const Input = memo(
  ({ icon, placeholderTextColor = colors.black, style, ...props }) => {
    const inputStyle = useMemo(
      () => (icon ? [...(isArray(style) ? style : [style]), styles.input] : style),
      [icon, style]
    );

    return (
      <View style={styles.field}>
        <Text style={styles.icon}>{icon}</Text>
        <TextInput {...props} style={inputStyle} placeholderTextColor={placeholderTextColor} />
      </View>
    );
  },
  ({ value: previousValue }, { value }) => isEqual(previousValue, value)
);

Input.displayName = 'Input';
