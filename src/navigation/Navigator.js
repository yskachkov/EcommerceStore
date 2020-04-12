import React, { memo, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import isEmpty from 'lodash/isEmpty';

import { LoadingSpinner } from 'src/components';
import { MainDrawer, AuthStack } from './navigators';

export const Navigator = memo(({ user: { token, loading }, authenticateUser }) => {
  useEffect(() => {
    authenticateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isAuthenticatedUser = useMemo(() => !isEmpty(token), [token]);

  if (loading) {
    return <LoadingSpinner size={70} />;
  }

  return (
    <NavigationContainer>
      {isAuthenticatedUser ? <MainDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
});

Navigator.displayName = 'Navigator';
