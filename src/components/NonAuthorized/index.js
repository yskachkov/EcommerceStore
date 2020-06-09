import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { colors } from 'src/assets/styles/colors';
import { useVibration } from 'src/hooks';
import { Button, Link } from 'src/components';
import styles from './NonAuthorized.styles';

export const NonAuthorized = memo(({ navigate, style }) => {
  const handleButtonPress = useCallback(
    screenName => {
      Vibration.cancel();

      navigate(screenName);
    },
    [navigate]
  );

  useVibration();

  const handleLoginPress = useCallback(() => handleButtonPress(ScreenName.Login), [
    handleButtonPress
  ]);

  const handleSignUpPress = useCallback(() => handleButtonPress(ScreenName.SignUp), [
    handleButtonPress
  ]);

  return (
    <View style={StyleSheet.flatten([styles.container, style])}>
      <View style={styles.iconContainer}>
        <Icon name="user-shield" size={100} color={colors.white} />
      </View>
      <Text style={styles.title}>Login first!</Text>
      <Text style={styles.text}>Login first to view the screen</Text>
      <Button
        title="Login Now"
        containerStyle={styles.loginButtonContainer}
        textStyle={styles.loginButton}
        onPress={handleLoginPress}
      />
      <Link title="New here? Sign Up" onPress={handleSignUpPress} />
    </View>
  );
});

NonAuthorized.displayName = 'NonAuthorized';
