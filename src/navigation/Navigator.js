import React, { memo, useEffect, useMemo } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import isEmpty from 'lodash/isEmpty';

import { ModalName } from 'src/components/Modal/config';
import { LoadingSpinner } from 'src/components';
import { MainDrawer, AuthStack } from './navigators';

export const Navigator = memo(
  ({ user: { token, authenticationLoading }, showModal, authenticateUser }) => {
    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(({ isInternetReachable }) => {
        if (isInternetReachable) {
          return;
        }

        showModal({
          name: ModalName.InternetConnectionError
        });
      });

      authenticateUser();

      return unsubscribe;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isAuthenticatedUser = useMemo(() => !isEmpty(token), [token]);

    if (authenticationLoading) {
      return <LoadingSpinner size={70} />;
    }

    return (
      <NavigationContainer>
        {isAuthenticatedUser ? <MainDrawer /> : <AuthStack />}
      </NavigationContainer>
    );
  }
);

Navigator.displayName = 'Navigator';
