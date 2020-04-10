import React, { memo } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from 'src/assets/styles/colors';
import styles from './LoadingSpinner.styles';

export const LoadingSpinner = memo(({ size = 60, color = colors.bostonBlue, style, ...props }) => (
  <ActivityIndicator
    {...props}
    size={size}
    color={color}
    style={StyleSheet.flatten([styles.spinner, style])}
  />
));

LoadingSpinner.displayName = 'LoadingSpinner';
