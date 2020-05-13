import 'react-native-gesture-handler';
import React from 'react';
import { NativeModules } from 'react-native';
import { Provider } from 'react-redux';

import { isAndroidPlatform } from './utils/platform';
import { store } from './store';
import { Navigator } from './navigation';
import { Modal } from './components';

const { UIManager } = NativeModules;

if (isAndroidPlatform()) {
  UIManager?.setLayoutAnimationEnabledExperimental(true);
}

export const App = () => (
  <Provider store={store}>
    <Navigator />
    <Modal />
  </Provider>
);
