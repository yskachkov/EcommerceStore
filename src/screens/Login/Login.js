import React, { memo, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { colors } from 'src/assets/styles/colors';
import { GradientView, FadeInView, TouchableText, Link, Button, Divider } from 'src/components';
import { FormInput } from 'src/components/Forms/Input';
import styles from './Login.styles';

export const Login = memo(({ user: { signInLoading }, handleSubmit, navigation: { navigate } }) => {
  const navigateToSignUpScreen = useCallback(() => navigate(ScreenName.SignUp), [navigate]);

  const handleSkipLogin = useCallback(() => navigate(ScreenName.MainDrawer), [navigate]);

  return (
    <GradientView style={styles.gradientView}>
      <KeyboardAwareScrollView>
        <FadeInView style={styles.container}>
          <TouchableText style={styles.title}>Ecommerce Store</TouchableText>
          <FormInput name="login" placeholder="Login" style={styles.input} />
          <FormInput
            secureTextEntry
            name="password"
            placeholder="Password"
            style={[styles.input, styles.passwordInput]}
          />
          <Link title="Forgot Password ?" containerStyle={styles.resetPasswordLink} />
          <Button
            title="Sign in"
            loading={signInLoading}
            disabled={signInLoading}
            containerStyle={styles.submitButton}
            textStyle={styles.buttonText}
            onPress={handleSubmit}
          />
          <Link
            title="New here? Sign Up"
            containerStyle={styles.signUpLink}
            onPress={navigateToSignUpScreen}
          />
        </FadeInView>
        <Divider size={3} color={colors.white} />
        <Button
          type="clear"
          title="Skip login"
          iconRight
          icon={
            <Icon name="arrow-right" size={25} color={colors.bostonBlue} style={styles.skipIcon} />
          }
          textStyle={StyleSheet.flatten([styles.buttonText, styles.skipLoginButton])}
          onPress={handleSkipLogin}
        />
      </KeyboardAwareScrollView>
    </GradientView>
  );
});

Login.displayName = ScreenName.Login;
