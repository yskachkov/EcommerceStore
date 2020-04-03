import React, { memo, useCallback } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ScreenName } from 'src/constants/screenNames';
import { GradientView, Link, Button } from 'src/components';
import FormInput from 'src/components/Forms/Input';
import styles from './Login.styles';

export const Login = memo(({ handleSubmit, navigation: { navigate } }) => {
  const navigateToSignUp = useCallback(() => navigate(ScreenName.SignUp), [navigate]);

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
      </KeyboardAwareScrollView>
    </GradientView>
  );
});

Login.displayName = ScreenName.Login;
