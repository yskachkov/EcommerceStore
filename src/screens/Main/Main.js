import React, { memo, useEffect, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import isEmpty from 'lodash/isEmpty';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { pageDataConfig } from './config';
import { CategoryList, LoadingSpinner } from 'src/components';
import { CategoryListHeader } from './components';
import styles from './Main.styles';

export const Main = memo(
  ({
    categories,
    categoryIds,
    categorySections,
    loadingCategories,
    loadingProducts,
    fetchCategoriesData,
    fetchProducts,
    refreshCategoriesData,
    clearCategoriesData,
    navigation: { navigate }
  }) => {
    useEffect(() => {
      fetchCategoriesData(pageDataConfig);

      return clearCategoriesData;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const previewCategories = useMemo(() => categoryIds.map(id => categories[id]), [
      categories,
      categoryIds
    ]);

    const showLoadingSpinner = useMemo(() => loadingCategories || isEmpty(previewCategories), [
      loadingCategories,
      previewCategories
    ]);

    const handleCategoryPress = useCallback(
      categoryId => {
        const { name } = categories[categoryId];

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

    const handleCategoryListEndReached = useCallback(() => {
      const allSectionsHasBeenLoaded = categorySections.length === previewCategories.length;
      const skipFetchProducts = loadingProducts || allSectionsHasBeenLoaded;

      if (skipFetchProducts) {
        return;
      }

      fetchProducts(pageDataConfig);
    }, [categorySections, fetchProducts, loadingProducts, previewCategories]);

    const handleCategoryListRefresh = useCallback(() => {
      refreshCategoriesData(pageDataConfig);
    }, [refreshCategoriesData]);

    if (showLoadingSpinner) {
      return <LoadingSpinner />;
    }

    return (
      <View style={styles.container}>
        <CategoryList
          data={categorySections}
          refreshing={loadingProducts}
          initialNumToRender={pageDataConfig.categorySectionsLimit}
          ListHeaderComponent={
            <CategoryListHeader
              categories={previewCategories}
              onPreviewPress={handleCategoryPress}
            />
          }
          onProductPress={handleProductPress}
          onCategoryPress={handleCategoryPress}
          onEndReachedThreshold={0.5}
          onEndReached={handleCategoryListEndReached}
          onRefresh={handleCategoryListRefresh}
        />
      </View>
    );
  }
);

Main.displayName = ScreenName.Main;
