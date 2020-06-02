import React, { memo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { GenericNavigator } from 'src/navigation/navigators';
import { navigatorScreenOptions, renderDrawerContent, navigatorScreenConfigs } from './config';

const { Navigator, Screen } = createDrawerNavigator();

export const MainDrawer = memo(() => (
  <GenericNavigator
    navigator={Navigator}
    screen={Screen}
    initialRouteName={ScreenName.MainStack}
    screenOptions={navigatorScreenOptions}
    screenConfigs={navigatorScreenConfigs}
    drawerContent={renderDrawerContent}
  />
));

MainDrawer.displayName = 'MainDrawer';
