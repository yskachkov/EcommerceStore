import React, { memo, useCallback } from 'react';
import { View, FlatList } from 'react-native';

import { ProductCard } from 'src/components';

export const ProductList = memo(
  ({
    keyProperty = 'id',
    containerStyle,
    listItemStyle,
    productImageStyle,
    onProductPress,
    ...props
  }) => {
    const renderItem = useCallback(
      ({ item: { id, name, price, oldPrice, thumb } }) => {
        const handleProductCardPress = () => onProductPress(id);

        return (
          <ProductCard
            key={name}
            title={name}
            price={price}
            oldPrice={oldPrice}
            imageUri={thumb}
            containerStyle={listItemStyle}
            imageStyle={productImageStyle}
            onPress={handleProductCardPress}
          />
        );
      },
      [listItemStyle, onProductPress, productImageStyle]
    );

    const keyExtractor = useCallback(item => item[keyProperty], [keyProperty]);

    return (
      <View style={containerStyle}>
        <FlatList {...props} renderItem={renderItem} keyExtractor={keyExtractor} />
      </View>
    );
  }
);

ProductList.displayName = 'ProductList';
