import React from 'react';

import { withMemo } from 'src/HOCs';
import { ProductCard } from 'src/components';
import styles from './CategoryContent.styles';

export const CategoryContent = withMemo(({ data, onProductPress }) =>
  data.map(({ id, ...itemProps }) => {
    const handleProductCardPress = () => onProductPress(id);

    return (
      <ProductCard
        {...itemProps}
        key={id}
        style={styles.productListItem}
        imageStyle={styles.productImage}
        onPress={handleProductCardPress}
      />
    );
  })
);

CategoryContent.displayName = 'CategoryContent';
