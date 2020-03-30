import React, { memo, useCallback } from 'react';
import { FlatList, Image, View } from 'react-native';

import { ProductCard } from 'src/components';
import styles from './ProductList.styles.js';

export const ProductList = memo(({ keyProperty = 'id', containerStyle, ...props }) => {
  const renderItem = useCallback(
    ({ item: { title, price, oldPrice, discount } }) => (
      <ProductCard
        title={title}
        price={price}
        oldPrice={oldPrice}
        discount={discount}
        containerStyle={styles.productCardContainer}
        imageStyle={styles.productCardImage}
      />
    ),
    []
  );

  return (
    <View style={containerStyle}>
      <FlatList {...props} renderItem={renderItem} keyExtractor={item => item[keyProperty]} />
    </View>
  );
});

ProductList.displayName = 'ProductList';
