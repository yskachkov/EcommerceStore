import React, { memo, useMemo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { icons } from './config';
import styles from './GenericModal.styles';

export const GenericModal = memo(({ type, title, text, buttons }) => {
  const iconConfig = useMemo(() => icons[type], [type]);

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
