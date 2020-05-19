import React, { memo } from 'react';

import { ProductList } from 'src/components';
import styles from './SectionContent.styles';

export const SectionContent = memo(props => (
  <ProductList
    {...props}
    numColumns={2}
    containerStyle={styles.listContainer}
    columnWrapperStyle={styles.listColumnWrapper}
  />
));

SectionContent.displayName = 'SectionContent';