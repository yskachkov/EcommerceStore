import React, { memo, useCallback } from 'react';
import { FlatList, View } from 'react-native';

import { ProductCard } from 'src/components';
import styles from './ProductList.styles.js';

export const ProductList = memo(
  ({ keyProperty = 'id', containerStyle, onProductPress, ...props }) => {
    const renderItem = useCallback(
      ({ item: { id, title, price, oldPrice, discount } }) => {
        const handleProductCardPress = () => onProductPress(id);

        return (
          <ProductCard
            title={title}
            price={price}
            oldPrice={oldPrice}
            discount={discount}
            containerStyle={styles.productCardContainer}
            imageStyle={styles.productCardImage}
            onPress={handleProductCardPress}
          />
        );
      },
      [onProductPress]
    );

    return (
      <View style={containerStyle}>
        <FlatList {...props} renderItem={renderItem} keyExtractor={item => item[keyProperty]} />
      </View>
    );
  }
);

ProductList.displayName = 'ProductList';
