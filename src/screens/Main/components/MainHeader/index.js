import React, { memo } from 'react';

import { colors } from 'src/assets/styles/colors';
import { Header, ProductPreview, Divider } from 'src/components';

export const MainHeader = memo(({ productCategories }) => (
  <>
    <Header withSearchBar withCart title="Ecommerce Store" />
    <ProductPreview data={productCategories} />
    <Divider size={12} color={colors.gallery} />
  </>
));

MainHeader.displayName = 'MainHeader';
