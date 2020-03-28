import React, { memo } from 'react';
import { TouchableHighlight, Text } from 'react-native';

import { colors } from 'src/assets/styles/colors';
import styles from './Button.styles';

export const Button = memo(({ title, children, style, onPress }) => {
  const content = title || children;

  return (
    <TouchableHighlight
      style={[styles.button, style]}
      underlayColor={colors.astral}
      onPress={onPress}
    >
      <Text style={styles.label}>{content}</Text>
    </TouchableHighlight>
  );
});

Button.displayName = 'Button';
