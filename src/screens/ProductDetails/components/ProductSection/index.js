import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import styles from './ProductSection.styles';

export const ProductSection = memo(({ title, children, containerStyle, titleStyle }) => (
  <View style={StyleSheet.flatten([styles.container, containerStyle])}>
    <Text style={StyleSheet.flatten([styles.title, titleStyle])}>{title}:</Text>
    {children}
  </View>
));

ProductSection.displayName = 'ProductSection';
