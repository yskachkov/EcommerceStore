import React, { memo, useEffect } from 'react';
import { Vibration, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { VIBRATION_PATTERN } from 'src/constants/vibration';
import { ModalType, icons } from 'src/components/Modal/config';
import styles from './GenericModal.styles';

export const GenericModal = memo(({ type, title, text, buttons }) => {
  const iconConfig = icons[type];

  useEffect(() => {
    if (type !== ModalType.Error) {
      return;
    }

    Vibration.vibrate(VIBRATION_PATTERN);

    return Vibration.cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Icon {...iconConfig} size={60} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.buttonWrapper}>{buttons}</View>
    </View>
  );
});

GenericModal.displayName = 'GenericModal';
