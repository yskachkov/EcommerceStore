import React, { memo, useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import isEmpty from 'lodash/isEmpty';

import { ModalName } from 'src/components/Modal/config';
import { useNetInfoConnection } from 'src/hooks';
import { LoadingSpinner } from 'src/components';
import { MainDrawer, AuthStack } from './navigators';

export const Navigator = memo(
  ({ user: { token, authenticationLoading }, showModal, authenticateUser }) => {
    const isAuthenticatedUser = !isEmpty(token);

    useEffect(() => {
      authenticateUser();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleNetInfoConnectionLost = useCallback(
      () => showModal({ name: ModalName.InternetConnectionError }),
      [showModal]
    );

    useNetInfoConnection({
      onConnectionLost: handleNetInfoConnectionLost
    });

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
