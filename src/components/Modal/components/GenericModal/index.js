import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ModalType, icons } from 'src/components/Modal/config';
import { useVibration } from 'src/hooks';
import styles from './GenericModal.styles';

export const GenericModal = memo(({ type, title, text, buttons }) => {
  const iconConfig = icons[type];
  const isNonErrorModal = type !== ModalType.Error;

  useVibration(isNonErrorModal);

  return (
    <View style={styles.container}>
      <Icon {...iconConfig} size={60} style={styles.icon} />
      {title && <Text style={styles.title}>{title}</Text>}
      {text && <Text style={styles.text}>{text}</Text>}
      <View style={styles.buttonWrapper}>{buttons}</View>
    </View>
  );
});

GenericModal.displayName = 'GenericModal';
