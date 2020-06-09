import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'src/assets/styles/colors';
import styles from './PaymentSecurity.styles';

export const PaymentSecurity = memo(() => (
  <View style={styles.container}>
    <Icon name="shield-alt" size={40} color={colors.conifer} />
    <View style={styles.textContainer}>
      <Text style={styles.text}>Safe and Secure Payments.</Text>
      <Text style={styles.text}>100% Authentic products</Text>
    </View>
  </View>
));

PaymentSecurity.displayName = 'PaymentSecurity';
