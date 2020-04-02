import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Button } from 'src/components';
import styles from './ProductSectionHeader.styles';

export const ProductSectionHeader = memo(({ title, style }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <Text style={styles.title}>{title}</Text>
    <Button
      title="View All"
      containerStyle={styles.viewAllButtonContainer}
      buttonStyle={styles.viewAllButton}
    />
  </View>
));

ProductSectionHeader.displayName = 'ProductSectionHeader';
