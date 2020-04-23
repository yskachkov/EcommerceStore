import React, { memo, useCallback } from 'react';
import { StyleSheet, View, Text, Vibration } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import partial from 'lodash/partial';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { useVibration } from 'src/hooks';
import { Button, Link } from 'src/components';
import styles from './ProtectedScreenView.styles';

export const ProtectedScreenView = memo(
  ({ user: { token }, children, navigate, style, ...props }) => {
    const isAuthenticatedUser = !isEmpty(token);

    useVibration(isAuthenticatedUser);

    if (isAuthenticatedUser) {
      return <View {...props}>{children}</View>;
    }

    const handleButtonPress = useCallback(
      screenName => {
        Vibration.cancel();

        navigate(screenName);
      },
      [navigate]
    );

    const handleLoginPress = partial(handleButtonPress, ScreenName.Login);

    const handleSignUpPress = partial(handleButtonPress, ScreenName.SignUp);

    return (
      <View style={StyleSheet.flatten([styles.container, style])}>
        <Text>Login first</Text>
        <Text>To view the screen please login first</Text>
        <Button title="Login Now" onPress={handleLoginPress} />
        <Link title="New here? Sign Up" onPress={handleSignUpPress} />
      </View>
    );
  }
);

ProtectedScreenView.displayName = 'ProtectedScreenView';
