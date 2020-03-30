import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'src/assets/styles/colors';
import { GradientView, Link, Button, Divider } from 'src/components';
import FormInput from 'src/components/Forms/Input';
import styles from './Login.styles';

export const Login = memo(({ handleSubmit }) => (
  <GradientView style={styles.gradientView}>
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Ecommerce Store</Text>
        <FormInput name="email" placeholder="Email Address" style={styles.input} />
        <FormInput
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
        iconRight
        icon={
          <Icon name="arrow-right" size={25} color={colors.bostonBlue} style={styles.skipIcon} />
        }
        buttonStyle={StyleSheet.flatten([styles.button, styles.skipLoginButton])}
      />
    </KeyboardAwareScrollView>
  </GradientView>
));

Login.displayName = 'Login';
