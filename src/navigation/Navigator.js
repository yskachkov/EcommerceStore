import React, { memo, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import isEmpty from 'lodash/isEmpty';

import { ModalName } from 'src/components/Modal/config';
import { LoadingSpinner } from 'src/components';
import { MainDrawer, AuthStack } from './navigators';

export const Navigator = memo(
  ({ user: { token, authenticationLoading }, showModal, authenticateUser }) => {
    const isAuthenticatedUser = !isEmpty(token);

    useEffect(() => {
      const unsubscribeNetInfo = NetInfo.addEventListener(({ isConnected }) => {
        if (isConnected) {
          return;
        }

        showModal({
          name: ModalName.InternetConnectionError
        });
      });

      authenticateUser();

      return unsubscribeNetInfo;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
