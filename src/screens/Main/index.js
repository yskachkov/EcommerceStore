import React, { memo } from 'react';
import { View } from 'react-native';

import { Header } from 'src/components/Header';

export const Main = memo(() => (
  <View>
    <Header withSearchBar withCart title="Ecommerce Store" />
  </View>
));

Main.displayName = 'Main';
