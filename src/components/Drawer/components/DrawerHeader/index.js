import React, { memo } from 'react';
import { View, Text } from 'react-native';

import styles from './DrawerHeader.styles';

export const DrawerHeader = memo(({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
));

DrawerHeader.displayName = 'DrawerHeader';
