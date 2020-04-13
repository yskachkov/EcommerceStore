import React, { memo, useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ScreenName } from 'src/constants/screenNames';
import { GradientView, FadeInView, TouchableText, Link, Button } from 'src/components';
import { FormInput } from 'src/components/Forms/Input';
import styles from './Login.styles';

export const Login = memo(({ user: { signInLoading }, handleSubmit, navigation: { navigate } }) => {
  const redirectToSignUpScreen = useCallback(() => navigate(ScreenName.SignUp), [navigate]);

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
            textStyle={styles.buttonLabel}
            onPress={handleSubmit}
          />
          <Link
            title="New here? Sign Up"
            containerStyle={styles.signUpLink}
            onPress={redirectToSignUpScreen}
          />
        </FadeInView>
      </KeyboardAwareScrollView>
    </GradientView>
  );
});

Login.displayName = ScreenName.Login;
