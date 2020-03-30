import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import styles from './Divider.styles.js';

export const Divider = memo(({ size, color, style, ...props }) => (
  <View style={StyleSheet.flatten([styles.container(size, color), style])} {...props} />
));

Divider.displayName = 'Divider';
