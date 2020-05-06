import React, { memo, useCallback } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { colors } from 'src/assets/styles/colors';
import { Divider, Button } from 'src/components';
import styles from './OrderConfirmation.styles';

export const OrderConfirmation = memo(({ navigation: { navigate } }) => {
  const handleContinueShopping = useCallback(() => navigate(ScreenName.Main), [navigate]);

  return (
    <>
      <Divider size={7} color={colors.bostonBlue} />
      <View style={styles.container}>
        <Icon solid name="check-square" size={120} color={colors.spicyMix} />
        <Text style={styles.title}>Order Confirmation</Text>
        <Text style={styles.subTitle}>Thank you for placing your order with us.</Text>
        <Text style={styles.text}>
          Please check your email for more details. For any questions and further information,
          please contact our support.
        </Text>
        <Button
          type="outline"
          title="Continue Shopping"
          containerStyle={styles.proceedButtonContainer}
          textStyle={styles.proceedButton}
          onPress={handleContinueShopping}
        />
      </View>
    </>
  );
});

OrderConfirmation.displayName = ScreenName.OrderConfirmation;
