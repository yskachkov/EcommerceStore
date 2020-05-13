import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import { loadStories } from './loadStories';
import { name as appName } from 'app.json';

configure(loadStories, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
