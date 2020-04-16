import React, { memo, useEffect, useCallback } from 'react';
import { View, Text, Vibration } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import partial from 'lodash/partial';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { VIBRATION_PATTERN } from 'src/constants/vibration';
import { Button, Link } from 'src/components';
import styles from './ProtectedScreenView.styles';

export const ProtectedScreenView = memo(({ user: { token }, children, navigate, ...props }) => {
  const isUserGuest = isEmpty(token);

  useEffect(() => {
    if (!isUserGuest) {
      return;
    }

    Vibration.vibrate(VIBRATION_PATTERN);

    return Vibration.cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isUserGuest) {
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
    <View style={styles.container}>
      <Text>Login first</Text>
      <Text>To view the screen please login first</Text>
      <Button title="Login Now" onPress={handleLoginPress} />
      <Link title="New here? Sign Up" onPress={handleSignUpPress} />
    </View>
  );
});

ProtectedScreenView.displayName = 'ProtectedScreenView';
