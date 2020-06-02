import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { GenericNavigator } from 'src/navigation/navigators';
import { navigatorScreenConfigs } from './config';

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = memo(() => (
  <GenericNavigator
    navigator={Navigator}
    screen={Screen}
    headerMode="none"
    screenConfigs={navigatorScreenConfigs}
  />
));

AuthStack.displayName = ScreenName.AuthStack;
