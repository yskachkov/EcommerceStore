import React, { memo, useEffect, useCallback } from 'react';
import { View } from 'react-native';

import { ScreenName } from 'src/constants/screenNames';
import { PRODUCT_LIST_DISPLAY_LIMIT } from './constants';
import { ProductList } from 'src/components';
import styles from './CategoryProducts.styles';

export const CategoryProducts = memo(
  ({
    products,
    productsTotal,
    loading,
    fetchProducts,
    clearProductsData,
    refreshProducts,
    route: {
      params: {
        data: { categoryId }
      }
    },
    navigation: { navigate }
  }) => {
    useEffect(() => {
      fetchProducts({
        categoryId,
        limit: PRODUCT_LIST_DISPLAY_LIMIT
      });

      return clearProductsData;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    const handleProductListEndReached = useCallback(() => {
      const allProductsHasBeenDisplayed = products.length === productsTotal;

      if (allProductsHasBeenDisplayed) {
        return;
      }

      fetchProducts({
        categoryId,
        limit: PRODUCT_LIST_DISPLAY_LIMIT
      });
    }, [categoryId, fetchProducts, products, productsTotal]);

    const handleProductListRefresh = useCallback(() => {
      refreshProducts({
        categoryId,
        limit: PRODUCT_LIST_DISPLAY_LIMIT
      });
    }, [refreshProducts, categoryId]);

    return (
      <View style={styles.container}>
        <ProductList
          initialNumToRender={PRODUCT_LIST_DISPLAY_LIMIT}
          refreshing={loading}
          data={products}
          style={styles.productList}
          productImageStyle={styles.productImage}
          onProductPress={handleProductPress}
          onEndReachedThreshold={0.2}
          onEndReached={handleProductListEndReached}
          onRefresh={handleProductListRefresh}
        />
      </View>
    );
  }
);

CategoryProducts.displayName = ScreenName.CategoryProducts;
