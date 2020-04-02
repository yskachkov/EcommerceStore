import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { RootNavigationStack } from './navigation';

const App = () => (
  <Provider store={store}>
    <RootNavigationStack />
  </Provider>
);

export default App;
