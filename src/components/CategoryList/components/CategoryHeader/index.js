import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { withMemo } from 'src/HOCs';
import { Button } from 'src/components';
import styles from './CategoryHeader.styles';

export const CategoryHeader = withMemo(({ title, onViewAll, style }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <Text style={styles.title}>{title}</Text>
    <Button
      title="View All"
      containerStyle={styles.viewAllButton}
      textStyle={styles.viewAllButtonText}
      onPress={onViewAll}
    />
  </View>
));

CategoryHeader.displayName = 'CategoryHeader';
