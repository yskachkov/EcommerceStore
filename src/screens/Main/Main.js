import React, { memo, useCallback } from 'react';

import { dummyCategories, dummySections, dummyProducts } from './';
import { ScreenName } from 'src/constants/screenNames';
import { ProductSectionList } from 'src/components';
import { ProductListHeader } from './components';

export const Main = memo(
  ({ productCategories = dummyCategories, sections = dummySections, navigation: { navigate } }) => {
    const handleProductPress = useCallback(
      productId =>
        navigate(ScreenName.ProductDetails, {
          data: dummyProducts.find(({ id }) => productId === id)
        }),
      [navigate]
    );

    return (
      <ProductSectionList
        ListHeaderComponent={<ProductListHeader productCategories={productCategories} />}
        sections={sections}
        onProductPress={handleProductPress}
      />
    );
  }
);

Main.displayName = ScreenName.Main;
