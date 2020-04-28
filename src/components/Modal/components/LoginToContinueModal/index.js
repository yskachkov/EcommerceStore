import React, { memo, useCallback } from 'react';

import { ModalType } from 'src/components/Modal/config';
import { GenericModal } from 'src/components/Modal/components';
import { Button } from 'src/components';
import styles from './LoginToContinueModal.styles';

export const LoginToContinueModal = memo(({ navigateToLogin, navigateToSignUp, onClose }) => {
  const handleLoginButtonPress = useCallback(() => {
    onClose();
    navigateToLogin();
  }, [navigateToLogin, onClose]);

  const handleSignUpButtonPress = useCallback(() => {
    onClose();
    navigateToSignUp();
  }, [navigateToSignUp, onClose]);

  return (
    <GenericModal
      type={ModalType.Warning}
      title="Login To Continue"
      text="Please login to add product in your cart"
      buttons={
        <>
          <Button
            title="Login"
            containerStyle={styles.loginButton}
            textStyle={styles.buttonText}
            onPress={handleLoginButtonPress}
          />
          <Button
            title="Signup"
            containerStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={handleSignUpButtonPress}
          />
        </>
      }
    />
  );
});

LoginToContinueModal.displayName = 'LoginToContinueModal';
