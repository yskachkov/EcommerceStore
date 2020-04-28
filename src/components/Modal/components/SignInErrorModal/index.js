import React, { memo } from 'react';

import { ModalType } from 'src/components/Modal/config';
import { GenericModal } from 'src/components/Modal/components';
import { Button } from 'src/components';
import styles from './SignInErrorModal.styles';

export const SignInErrorModal = memo(({ onClose, ...props }) => (
  <GenericModal
    {...props}
    type={ModalType.Error}
    buttons={
      <Button
        title="Ok"
        containerStyle={styles.button}
        textStyle={styles.buttonText}
        onPress={onClose}
      />
    }
  />
));

SignInErrorModal.displayName = 'SignInErrorModal';
