import React, { memo } from 'react';

import { ProductList } from 'src/components';
import styles from './ProductSectionContent.styles';

export const ProductSectionContent = memo(props => (
  <ProductList
    {...props}
    numColumns={2}
    containerStyle={styles.listContainer}
    columnWrapperStyle={styles.listColumnWrapper}
  />
));

ProductSectionContent.displayName = 'ProductSectionContent';
