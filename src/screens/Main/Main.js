import React, { memo, useEffect, useCallback } from 'react';

import { ScreenName } from 'src/constants/screenNames';
import { PRODUCT_DISPLAY_LIMIT } from './constants';
import { ProductSectionList } from 'src/components';
import { ProductListHeader } from './components';

export const Main = memo(({ categories, sections, fetchData, navigation: { navigate } }) => {
  useEffect(() => {
    fetchData({
      sectionLimit: PRODUCT_DISPLAY_LIMIT
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleViewAllPress = useCallback(
    categoryId => {
      const { name } = categories.get(categoryId);

      navigate(ScreenName.CategoryProducts, {
        title: name,
        data: {
          categoryId
        }
      });
    },
    [categories, navigate]
  );

  const handleProductPress = useCallback(
    productId =>
      navigate(ScreenName.ProductDetails, {
        data: {
          productId
        }
      }),
    [navigate]
  );

  return (
    <ProductSectionList
      ListHeaderComponent={<ProductListHeader categories={categories} />}
      sections={sections}
      onProductPress={handleProductPress}
      onViewAllPress={handleViewAllPress}
    />
  );
});

Main.displayName = ScreenName.Main;
