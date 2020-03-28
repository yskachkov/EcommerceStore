import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { GradientView, Link, Button } from 'src/components';
import FormInput from 'src/components/Forms/Input';
import styles from './Login.styles';

export const Login = memo(({ handleSubmit }) => (
  <GradientView style={styles.gradientView}>
    <KeyboardAwareScrollView>
      <View style={styles.view}>
        <Text style={styles.title}>Ecommerce Store</Text>
        <FormInput name="email" placeholder="Email Address" style={styles.input} />
        <FormInput
          name="password"
          placeholder="Password"
          style={[styles.input, styles.passwordInput]}
        />
        <Link style={styles.resetPasswordButton}>Forgot Password ?</Link>
        <Button style={styles.submitButton} onPress={handleSubmit}>
          Sign in
        </Button>
        <Link style={styles.signUpButton}>New here? Sign Up</Link>
      </View>
    </KeyboardAwareScrollView>
  </GradientView>
));

Login.displayName = 'Login';
