import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { withMemo } from 'src/HOCs';
import { Card } from 'src/components';
import styles from './ProductCard.styles';

export const ProductCard = withMemo(
  ({ title, imageUri, price, oldPrice, imageStyle, titleStyle, ...props }) => {
    const imageSource = { uri: imageUri };

    return (
      <Card {...props}>
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
      </Card>
    );
  }
);

ProductCard.displayName = 'ProductCard';
