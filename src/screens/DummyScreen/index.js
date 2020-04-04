import React, { memo } from 'react';
import { Text, View } from 'react-native';

export const DummyScreen = memo(({ route: { name } }) => (
  <View>
    <Text>{name} Screen</Text>
  </View>
));

DummyScreen.displayName = 'DummyScreen';
