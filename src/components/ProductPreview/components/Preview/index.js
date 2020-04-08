import React, { memo } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import styles from './Preview.styles';

export const Preview = memo(({ name, thumb, style }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <Image source={{ uri: `http:${thumb}` }} style={styles.image} />
    <Text style={styles.text}>{name}</Text>
  </View>
));

Preview.displayName = 'Preview';
