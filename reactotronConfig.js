import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .connect();

// test display
Reactotron.display({
  name: 'React Native',
  preview: 'Hello',
  value: 'world',
  important: true
});
