import React, { memo } from 'react';
import { Text } from 'react-native';

export const DummyScreen = memo(({ route: { name } }) => <Text>{name} Screen</Text>);

DummyScreen.displayName = 'DummyScreen';
