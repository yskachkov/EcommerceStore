import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

import { withMemo } from 'src/HOCs';
import styles from './ProductCard.styles';

export const ProductCard = withMemo(
  ({ title, imageUri, price, oldPrice, containerStyle, imageStyle, titleStyle, onPress }) => {
    const imageSource = { uri: imageUri };

    return (
      <TouchableOpacity
        style={StyleSheet.flatten([styles.container, containerStyle])}
        onPress={onPress}
      >
        <Image source={imageSource} style={StyleSheet.flatten([styles.image, imageStyle])} />
        <View>
          <Text numberOfLines={2} style={StyleSheet.flatten([styles.title, titleStyle])}>
            {title}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>$ {price}</Text>
            {oldPrice && (
              <>
                <Text style={styles.oldPrice}>$ {oldPrice}</Text>
                <Text style={styles.discount}>Sale</Text>
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
);

ProductCard.displayName = 'ProductCard';
