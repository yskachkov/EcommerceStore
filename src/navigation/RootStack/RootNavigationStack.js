import 'react-native-gesture-handler';
import React, { memo, useEffect, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import isEmpty from 'lodash/isEmpty';

import { LoadingSpinner } from 'src/components';
import { navigatorScreenOptions, getScreenConfigs } from './config';

const { Navigator, Screen } = createStackNavigator();

export const RootStack = memo(({ user: { token, loading }, authenticateUser }) => {
  const isAuthenticatedUser = !isEmpty(token);
  const navigatorScreenConfigs = useMemo(() => getScreenConfigs(isAuthenticatedUser), [
    isAuthenticatedUser
  ]);

  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);

  if (loading) {
    return <LoadingSpinner size={70} />;
  }

  return (
    <Navigator screenOptions={navigatorScreenOptions}>
      {navigatorScreenConfigs.map(({ name, component, props = {} }) => (
        <Screen key={name} name={name} component={component} {...props} />
      ))}
    </Navigator>
  );
});

RootStack.displayName = 'RootStack';
