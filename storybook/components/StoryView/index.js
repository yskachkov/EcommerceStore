import React from 'react';
import { View } from 'react-native';

import styles from './StoryView.styles';

export const StoryView = ({ top, bottom }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>{top}</View>
      <View style={styles.row}>{bottom}</View>
    </View>
  );
};
