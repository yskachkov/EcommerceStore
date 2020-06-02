import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import isEmpty from 'lodash/isEmpty';

import { getComponentDisplayName } from 'src/utils/displayName';
import { NonAuthorized } from 'src/components';

export const withProtectedScreen = ScreenComponent => {
  const ProtectedScreen = memo(({ user: { token }, ...props }) => {
    const { navigate } = useNavigation();

    const isGuestUser = isEmpty(token);

    if (isGuestUser) {
      return <NonAuthorized navigate={navigate} />;
    }

    return <ScreenComponent {...props} />;
  });

  ProtectedScreen.displayName = `withProtectedScreen(${getComponentDisplayName(ScreenComponent)})`;

  return ProtectedScreen;
};
