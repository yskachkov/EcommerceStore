import React, { memo } from 'react';

import { CardList, ProductCard } from 'src/components';

export const ProductList = memo(({ imageStyle, onProductPress, ...props }) => {
  const productCardProps = {
    imageStyle
  };

  return (
    <CardList
      {...props}
      listItemComponent={ProductCard}
      listItemComponentProps={productCardProps}
      onCardPress={onProductPress}
    />
  );
});

ProductList.displayName = 'ProductList';
