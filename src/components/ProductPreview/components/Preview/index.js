import React, { memo } from 'react';
import { View, Image, Text } from 'react-native';

import styles from './Preview.styles';

export const Preview = memo(({ title }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: `https://via.placeholder.com/150/318CBF/FFFFFF/?text=${title[0]}` }}
      style={styles.image}
    />
    <Text style={styles.text}>{title}</Text>
  </View>
));

Preview.displayName = 'Preview';
