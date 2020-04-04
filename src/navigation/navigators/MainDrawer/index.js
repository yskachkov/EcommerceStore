import React, { memo, useCallback } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { navigatorScreenOptions, renderDrawerContent, navigatorScreenConfigs } from './config';

const { Navigator, Screen } = createDrawerNavigator();

export const MainDrawer = memo(() => {
  const renderNavigatorScreens = useCallback(
    () =>
      navigatorScreenConfigs.map(({ name, component, props = {} }) => (
        <Screen key={name} name={name} component={component} {...props} />
      )),
    []
  );

  return (
    <Navigator
      initialRouteName="MainStack"
      screenOptions={navigatorScreenOptions}
      drawerContent={renderDrawerContent}
    >
      {renderNavigatorScreens()}
    </Navigator>
  );
});

MainDrawer.displayName = 'MainDrawer';
