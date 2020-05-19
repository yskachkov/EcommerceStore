import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from 'src/assets/styles/colors';
import { GradientView, Link, Button, Divider } from 'src/components';
import FormInput from 'src/components/Forms/Input';
import styles from './Login.styles';

export const Login = memo(({ handleSubmit }) => (
  <GradientView style={styles.gradientView}>
    <View style={styles.container}>
      <Text style={styles.title}>Ecommerce Store</Text>
      <FormInput name="login" placeholder="Email or Login" style={styles.input} />
      <FormInput
        secureTextEntry
        name="password"
        placeholder="Password"
        style={[styles.input, styles.passwordInput]}
      />
      <Link style={styles.resetPasswordLink}>Forgot Password ?</Link>
      <Button
        title="Sign in"
        containerStyle={styles.submitButton}
        buttonStyle={styles.button}
        onPress={handleSubmit}
      />
      <Link style={styles.signUpLink}>New here? Sign Up</Link>
    </View>
    <Divider size={3} color={colors.white} />
    <Button
      type="clear"
      title="Skip login"
      buttonStyle={StyleSheet.flatten([styles.button, styles.skipLoginButton])}
    />
  </GradientView>
));

Login.displayName = 'Login';
