import React, { memo, useMemo } from 'react';
import isEmpty from 'lodash/isEmpty';

import { colors } from 'src/assets/styles/colors';
import { ProductPreview, Divider } from 'src/components';

export const ProductListHeader = memo(({ categories }) => {
  const previewCategories = useMemo(() => (isEmpty(categories) ? [] : [...categories.values()]), [
    categories
  ]);

  return (
    <>
      <ProductPreview data={previewCategories} />
      <Divider size={12} color={colors.gallery} />
    </>
  );
});

ProductListHeader.displayName = 'ProductListHeader';
