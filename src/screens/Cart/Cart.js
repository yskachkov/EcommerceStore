import React, { memo, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import isNull from 'lodash/isNull';
import isEmpty from 'lodash/isEmpty';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { colors } from 'src/assets/styles/colors';
import { LoadingSpinner, Button } from 'src/components';
import { ProductList, PriceDetails, PaymentSecurity } from './components';
import styles from './Cart.styles';

export const Cart = memo(
  ({
    products,
    totalQuantity,
    total,
    loading,
    fetchCheckoutData,
    removeProductFromCart,
    completeOrder,
    navigation: { navigate }
  }) => {
    const showLoadingSpinner = loading || isNull(products);

    const handleShopNowPress = useCallback(() => navigate(ScreenName.Main), [navigate]);

    const handleProductRemove = useCallback(id => removeProductFromCart({ id }), [
      removeProductFromCart
    ]);

    const handlePaymentProceed = useCallback(() => {
      completeOrder({
        onSuccess: () => navigate(ScreenName.OrderConfirmation)
      });
    }, [completeOrder, navigate]);

    useEffect(() => {
      if (!isEmpty(products)) {
        return;
      }

      fetchCheckoutData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (showLoadingSpinner) {
      return <LoadingSpinner />;
    }

    if (isEmpty(products)) {
      return (
        <View style={styles.emptyCartContainer}>
          <Icon name="cart-plus" color={colors.bostonBlue} size={100} />
          <Text style={styles.emptyCartTitle}>Your cart is empty!</Text>
          <Text style={styles.emptyCartText}>Add product in your cart now.</Text>
          <Button
            title="Shop Now"
            containerStyle={styles.shopNowButtonContainer}
            textStyle={styles.shopNowButton}
            onPress={handleShopNowPress}
          />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ProductList
          data={products}
          ListFooterComponent={<PriceDetails totalQuantity={totalQuantity} total={total} />}
          style={styles.productList}
          onProductRemove={handleProductRemove}
        />
        <View style={styles.paymentContainer}>
          <PaymentSecurity />
          <Button
            title="Proceed to payment"
            containerStyle={styles.proceedButtonContainer}
            textStyle={styles.proceedButton}
            onPress={handlePaymentProceed}
          />
        </View>
      </View>
    );
  }
);

Cart.displayName = ScreenName.Cart;
