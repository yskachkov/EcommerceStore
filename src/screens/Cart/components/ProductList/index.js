import React, { memo } from 'react';

import { CardList } from 'src/components';
import { ProductCard } from 'src/screens/Cart/components';

export const ProductList = memo(({ onProductRemove, ...props }) => (
  <CardList {...props} listItemComponent={ProductCard} onCardPress={onProductRemove} />
));

ProductList.displayName = 'ProductList';
