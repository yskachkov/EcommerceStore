import React, { memo } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import styles from './ProductCard.styles';

export const ProductCard = memo(
  ({ title, price, oldPrice, discount, containerStyle, imageStyle }) => (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <Image
        source={{ uri: `https://via.placeholder.com/80x100/318CBF/FFFFFF/?text=${title[0]}` }}
        style={StyleSheet.flatten([styles.image, imageStyle])}
      />
      <Text>{title}</Text>
      <View style={styles.infoContainer}>
        <Text>$ {price} </Text>
        {oldPrice && <Text style={styles.oldPrice}>$ {oldPrice} </Text>}
        {discount && <Text style={styles.discount}>{discount}% Off</Text>}
      </View>
    </View>
  )
);

ProductCard.displayName = 'ProductCard';
