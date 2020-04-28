import React, { memo, useMemo, useCallback } from 'react';
import {
  Modal as RegularModal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import isEmpty from 'lodash/isEmpty';

import { modals } from './config';
import styles from './Modal.styles';

export const Modal = memo(({ modal: { isVisible, name }, closeModal }) => {
  if (isEmpty(name) || !isVisible) {
    return null;
  }
  const ModalContent = useMemo(() => modals[name], [name]);

  const handleModalClose = useCallback(() => closeModal(), [closeModal]);

  return (
    <RegularModal
      transparent
      visible={isVisible}
      animationType="fade"
      onRequestClose={handleModalClose}
    >
      <TouchableOpacity activeOpacity={1} style={styles.container} onPress={handleModalClose}>
        <TouchableWithoutFeedback>
          <View>
            <ModalContent onClose={handleModalClose} />
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </RegularModal>
  );
});

Modal.displayName = 'Modal';
