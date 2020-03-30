import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Button } from 'src/components';
import styles from './SectionHeader.styles';

export const SectionHeader = memo(({ title, style }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <Text style={styles.title}>{title}</Text>
    <Button
      title="View All"
      containerStyle={styles.viewAllButtonContainer}
      buttonStyle={styles.viewAllButton}
    />
  </View>
));

SectionHeader.displayName = 'SectionHeader';
