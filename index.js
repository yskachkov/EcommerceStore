import { AppRegistry } from 'react-native';
import Reactotron from 'reactotron-react-native';

import App from 'src/App';
import { name as appName } from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

// reactotron demo
Reactotron.display({
  name: 'React Native',
  preview: 'Hello',
  value: 'world',
  important: true
});

AppRegistry.registerComponent(appName, () => App);
