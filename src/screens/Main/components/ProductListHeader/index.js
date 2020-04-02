import React, { memo } from 'react';

import { colors } from 'src/assets/styles/colors';
import { ProductPreview, Divider } from 'src/components';

export const ProductListHeader = memo(({ productCategories }) => (
  <>
    <ProductPreview data={productCategories} />
    <Divider size={12} color={colors.gallery} />
  </>
));

ProductListHeader.displayName = 'ProductListHeader';
