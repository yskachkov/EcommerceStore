import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import styles from './Card.styles';

export const Card = memo(({ style, ...props }) => (
  <TouchableOpacity {...props} style={StyleSheet.flatten([styles.container, style])} />
));

Card.displayName = 'Card';
