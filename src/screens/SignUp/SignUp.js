import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { GradientView, Link, Button } from 'src/components';
import FormInput from 'src/components/Forms/Input';
import styles from './SignUp.styles';

export const SignUp = memo(({ handleSubmit }) => (
  <GradientView style={styles.gradientView}>
    <KeyboardAwareScrollView>
      <View style={styles.view}>
        <Text style={styles.title}>Ecommerce Store</Text>
        <FormInput name="fullName" placeholder="Full Name" style={styles.input} />
        <FormInput name="email" placeholder="Email Address" style={styles.input} />
        <FormInput name="password" placeholder="Password" style={styles.input} />
        <FormInput
          name="confirmPassword"
          placeholder="Confirm Password"
          style={[styles.input, styles.confirmPasswordInput]}
        />
        <Button style={styles.submitButton} onPress={handleSubmit}>
          Sign up
        </Button>
        <Link style={styles.signInButton}>Already have account? Sign In</Link>
      </View>
    </KeyboardAwareScrollView>
  </GradientView>
));

SignUp.displayName = 'SignUp';
