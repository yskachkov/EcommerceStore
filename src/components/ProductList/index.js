import React, { memo, useCallback } from 'react';
import { View, FlatList } from 'react-native';

import { ListRefreshControl, ProductCard } from 'src/components';

export const ProductList = memo(
  ({
    refreshing,
    containerStyle,
    listItemStyle,
    productImageStyle,
    onProductPress,
    onRefresh,
    ...props
  }) => {
    const renderItem = useCallback(
      ({ item: { id, name, price, oldPrice, thumb } }) => {
        const handleProductCardPress = () => onProductPress(id);

        return (
          <ProductCard
            key={id}
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

    const keyExtractor = useCallback(({ id }) => id, []);

    return (
      <View style={containerStyle}>
        <FlatList
          {...props}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          refreshControl={<ListRefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      </View>
    );
  }
);

ProductList.displayName = 'ProductList';
