import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './store';
import { RootNavigationStack } from './navigation';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootNavigationStack />
    </NavigationContainer>
  </Provider>
);

export default App;
