import React, { memo, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';

import styles from './SelectorOption.styles';

export const SelectorOption = memo(({ value, active, style, onSelect }) => {
  const handlePress = useCallback(() => onSelect(value), [onSelect, value]);

  return (
    <Text style={StyleSheet.flatten([styles.option(active), style])} onPress={handlePress}>
      {value}
    </Text>
  );
});

SelectorOption.displayName = 'SelectorOption';
