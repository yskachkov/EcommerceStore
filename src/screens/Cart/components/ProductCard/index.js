import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'src/assets/styles/colors';
import { Card, Button } from 'src/components';
import styles from './ProductCard.styles';

export const ProductCard = memo(({ title, total, quantity, imageUri, onPress, ...props }) => {
  const imageSource = { uri: imageUri };

  return (
    <Card {...props} activeOpacity={1} style={styles.container}>
      <View style={styles.leftColumnContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.price}>{total}</Text>
        <Text style={styles.quantity}>Qty: {quantity}</Text>
      </View>
      <View style={styles.rightColumnContainer}>
        <Image source={imageSource} style={styles.image} />
        <Button
          type="clear"
          icon={<Icon solid name="trash-alt" size={25} color={colors.pumice} />}
          containerStyle={styles.removeButton}
          onPress={onPress}
        />
      </View>
    </Card>
  );
});

ProductCard.displayName = 'ProductCard';
