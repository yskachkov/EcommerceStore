import React, { memo } from 'react';

import { ModalType } from 'src/components/Modal/config';
import { GenericModal } from 'src/components/Modal/components';
import { Button } from 'src/components';
import styles from './InternetConnectionErrorModal.styles';

export const InternetConnectionErrorModal = memo(({ onClose }) => (
  <GenericModal
    type={ModalType.Error}
    title="Connection error"
    text="You are offline, connect to the internet."
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

InternetConnectionErrorModal.displayName = 'InternetConnectionErrorModal';
