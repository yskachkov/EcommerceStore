import React, { memo } from 'react';

import { ModalType } from 'src/components/Modal/config';
import { GenericModal } from 'src/components/Modal/components';
import { Button } from 'src/components';
import styles from './LoginModal.styles';

export const LoginModal = memo(() => (
  <GenericModal
    type={ModalType.Warning}
    title="Login To Continue"
    text="Please login to add product in your cart"
    buttons={
      <>
        <Button title="Login" containerStyle={styles.loginButton} textStyle={styles.buttonText} />
        <Button title="Signup" containerStyle={styles.button} textStyle={styles.buttonText} />
      </>
    }
  />
));

LoginModal.displayName = 'LoginModal';
