import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './DataRow.styles';

export const DataRow = memo(({ label, value, labelStyle, valueStyle, style }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <Text numberOfLines={1} style={StyleSheet.flatten([styles.text, labelStyle])}>
      {label}
    </Text>
    <Text numberOfLines={1} style={StyleSheet.flatten([styles.text, valueStyle])}>
      {value}
    </Text>
  </View>
));

DataRow.displayName = 'DataRow';
