import React, { memo, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { navigatorScreenConfigs } from './config';

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = memo(() => {
  const renderNavigatorScreens = useCallback(
    () =>
      navigatorScreenConfigs.map(({ name, component, props = {} }) => (
        <Screen key={name} name={name} component={component} {...props} />
      )),
    []
  );

  return <Navigator headerMode="none">{renderNavigatorScreens()}</Navigator>;
});

AuthStack.displayName = 'AuthStack';
