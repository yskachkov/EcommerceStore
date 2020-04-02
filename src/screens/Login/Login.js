import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ScreenName } from 'src/constants/screenNames';
import { colors } from 'src/assets/styles/colors';
import { GradientView, Link, Button, Divider } from 'src/components';
import FormInput from 'src/components/Forms/Input';
import styles from './Login.styles';

export const Login = memo(({ handleSubmit, navigation: { navigate } }) => {
  const navigateToSignUp = useCallback(() => navigate(ScreenName.SignUp), [navigate]);
  const handleSkipLogin = useCallback(() => navigate(ScreenName.Main), [navigate]);

  return (
    <GradientView style={styles.gradientView}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Ecommerce Store</Text>
          <FormInput name="login" placeholder="Email or Login" style={styles.input} />
          <FormInput
            secureTextEntry
            name="password"
            placeholder="Password"
            style={[styles.input, styles.passwordInput]}
          />
          <Link title="Forgot Password ?" containerStyle={styles.resetPasswordLink} />
          <Button
            title="Sign in"
            containerStyle={styles.submitButton}
            buttonStyle={styles.button}
            onPress={handleSubmit}
          />
          <Link
            title="New here? Sign Up"
            containerStyle={styles.signUpLink}
            onPress={navigateToSignUp}
          />
        </View>
        <Divider size={3} color={colors.white} />
        <Button
          type="clear"
          title="Skip login"
          iconRight
          icon={
            <Icon name="arrow-right" size={25} color={colors.bostonBlue} style={styles.skipIcon} />
          }
          buttonStyle={StyleSheet.flatten([styles.button, styles.skipLoginButton])}
          onPress={handleSkipLogin}
        />
      </KeyboardAwareScrollView>
    </GradientView>
  );
});

Login.displayName = ScreenName.Login;
