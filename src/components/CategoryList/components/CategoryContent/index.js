import React from 'react';

import { withMemo } from 'src/HOCs';
import { ProductCard } from 'src/components';
import styles from './CategoryContent.styles';

export const CategoryContent = withMemo(({ data, onProductPress }) =>
  data.map(({ id, name, price, oldPrice, thumb }) => {
    const handleProductCardPress = () => onProductPress(id);

    return (
      <ProductCard
        key={id}
        title={name}
        price={price}
        oldPrice={oldPrice}
        imageUri={thumb}
        containerStyle={styles.productListItem}
        imageStyle={styles.productImage}
        onPress={handleProductCardPress}
      />
    );
  })
);

CategoryContent.displayName = 'CategoryContent';
