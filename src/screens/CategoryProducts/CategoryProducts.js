import React, { memo, useEffect, useCallback } from 'react';
import { View } from 'react-native';

import { ScreenName } from 'src/constants/screenNames';
import { ProductList } from 'src/components';
import styles from './CategoryProducts.styles';

export const CategoryProducts = memo(
  ({
    products,
    loading,
    fetchCategoryData,
    clearProducts,
    refreshCategoryData,
    route: {
      params: {
        data: { categoryId }
      }
    },
    navigation: { navigate }
  }) => {
    useEffect(() => {
      fetchCategoryData({
        categoryId
      });

      return clearProducts;
    }, [fetchCategoryData, categoryId, clearProducts]);

    const handleProductPress = useCallback(
      productId => {
        navigate(ScreenName.ProductDetails, {
          data: {
            productId
          }
        });
      },
      [navigate]
    );

    const handleProductListRefresh = useCallback(() => {
      refreshCategoryData({
        categoryId
      });
    }, [refreshCategoryData, categoryId]);

    return (
      <View style={styles.container}>
        <ProductList
          refreshing={loading}
          data={products}
          style={styles.productList}
          productImageStyle={styles.productImage}
          onProductPress={handleProductPress}
          onRefresh={handleProductListRefresh}
        />
      </View>
    );
  }
);

CategoryProducts.displayName = ScreenName.CategoryProducts;
