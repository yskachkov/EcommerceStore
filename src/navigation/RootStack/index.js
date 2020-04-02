import 'react-native-gesture-handler';
import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigatorScreenOptions, navigatorScreenConfigs } from './config';

const { Navigator, Screen } = createStackNavigator();

export const RootNavigationStack = memo(() => (
  <NavigationContainer>
    <Navigator screenOptions={navigatorScreenOptions}>
      {navigatorScreenConfigs.map(({ name, component, props = {} }) => (
        <Screen key={name} name={name} component={component} {...props} />
      ))}
    </Navigator>
  </NavigationContainer>
));

RootNavigationStack.displayName = 'RootNavigationStack';
