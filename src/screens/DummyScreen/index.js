import React, { memo } from 'react';
import { Text } from 'react-native';

import { ProtectedScreenView } from 'src/components';

export const DummyScreen = memo(({ route: { name }, navigation: { navigate } }) => (
  <ProtectedScreenView navigate={navigate}>
    <Text>{name} Screen</Text>
  </ProtectedScreenView>
));

DummyScreen.displayName = 'DummyScreen';
