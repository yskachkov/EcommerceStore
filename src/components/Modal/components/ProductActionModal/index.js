import React, { memo } from 'react';

import { ModalType } from 'src/components/Modal/config';
import { GenericModal } from 'src/components/Modal/components';
import { Button } from 'src/components';
import styles from './ProductAction.styles';

export const ProductActionModal = memo(({ onClose, ...props }) => (
  <GenericModal
    {...props}
    type={ModalType.Success}
    buttons={
      <Button
        title="Ok"
        containerStyle={styles.buttonContainer}
        textStyle={styles.button}
        onPress={onClose}
      />
    }
  />
));

ProductActionModal.displayName = 'ProductActionModal';
