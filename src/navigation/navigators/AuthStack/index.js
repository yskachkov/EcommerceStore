import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ScreenName } from 'src/constants/screenNames';
import { LoginScreen, SignUpScreen } from 'src/screens';

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = memo(() => (
  <Navigator headerMode="none">
    <Screen name={ScreenName.Login} component={LoginScreen} />
    <Screen name={ScreenName.SignUp} component={SignUpScreen} />
  </Navigator>
));

AuthStack.displayName = 'AuthStack';
