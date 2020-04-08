import React, { memo, useEffect, useMemo, useCallback } from 'react';
import { View } from 'react-native';
import isEmpty from 'lodash/isEmpty';

import { ScreenName } from 'src/constants/screenNames';
import { ProductList } from 'src/components';
import styles from './CategoryProducts.styles';

export const CategoryProducts = memo(
  ({
    products,
    fetchData,
    clearProducts,
    route: {
      params: {
        data: { categoryId }
      }
    },
    navigation: { navigate }
  }) => {
    useEffect(() => {
      fetchData({
        categoryId
      });

      return clearProducts;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const productList = useMemo(() => {
      if (isEmpty(products)) {
        return [];
      }

      return [...products.values()];
    }, [products]);

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

    return (
      <View style={styles.container}>
        <ProductList
          data={productList}
          productImageStyle={styles.productImage}
          onProductPress={handleProductPress}
        />
      </View>
    );
  }
);

CategoryProducts.displayName = ScreenName.CategoryProducts;
