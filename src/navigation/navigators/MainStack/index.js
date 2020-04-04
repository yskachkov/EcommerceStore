import React, { memo, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { navigatorScreenOptions, navigatorScreenConfigs } from './config';

const { Navigator, Screen } = createStackNavigator();

export const MainStack = memo(() => {
  const renderNavigatorScreens = useCallback(
    () =>
      navigatorScreenConfigs.map(({ name, component, props = {} }) => (
        <Screen key={name} name={name} component={component} {...props} />
      )),
    []
  );

  return <Navigator screenOptions={navigatorScreenOptions}>{renderNavigatorScreens()}</Navigator>;
});

MainStack.displayName = 'MainStack';
