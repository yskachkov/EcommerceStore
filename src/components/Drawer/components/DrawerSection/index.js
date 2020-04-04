import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import styles from './DrawerSection.styles';

export const DrawerSection = memo(({ title, children, style }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </View>
));

DrawerSection.displayName = 'DrawerSection';
