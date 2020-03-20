import React, { memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export const Main = memo(({ text, updateText, updateTextAsync, resetText }) => (
  <>
    <View style={styles.body}>
      <Text style={styles.userMessage}>{text}</Text>
      <TouchableOpacity onPress={() => updateText('Hello...')}>
        <Text style={styles.text}>Update text</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateTextAsync('Hello... (async)')}>
        <Text style={styles.text}>Update text (async)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => resetText()}>
        <Text style={styles.text}>Reset Text</Text>
      </TouchableOpacity>
    </View>
  </>
));

Main.displayName = 'Main';
