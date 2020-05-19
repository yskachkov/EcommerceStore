import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { colors } from 'src/assets/styles/colors';
import { GradientView, Link, Button, Divider } from 'src/components';
import FormInput from 'src/components/Forms/Input';
import styles from './SignUp.styles';

export const SignUp = memo(({ handleSubmit }) => (
  <GradientView style={styles.gradientView}>
    <Divider size={7} color={colors.bostonBlue} />
    <View style={styles.container}>
      <Text style={styles.title}>Ecommerce Store</Text>
      <FormInput name="fullName" placeholder="Full Name" style={styles.input} />
      <FormInput name="email" placeholder="Email Address" style={styles.input} />
      <FormInput secureTextEntry name="password" placeholder="Password" style={styles.input} />
      <FormInput
        secureTextEntry
        name="confirmPassword"
        placeholder="Confirm Password"
        style={[styles.input, styles.confirmPasswordInput]}
      />
      <Button
        title="Sign up"
        containerStyle={styles.submitButtonContainer}
        buttonStyle={styles.submitButton}
        onPress={handleSubmit}
      />
      <Link style={styles.signInLink}>Already have account? Sign In</Link>
    </View>
  </GradientView>
));

SignUp.displayName = 'SignUp';
