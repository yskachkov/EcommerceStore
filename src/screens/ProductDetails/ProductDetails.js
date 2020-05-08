import React, { memo, useCallback, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { ImageSwiper, Divider, Button, LikeButton, LoadingSpinner } from 'src/components';
import { ProductSection } from './components';
import styles from './ProductDetails.styles';

export const ProductDetails = memo(
  ({
    data: { id, imageUris = [], title, oldPrice, price, description },
    loading,
    fetchProductDetails,
    clearDetails,
    addProductToCart,
    route: {
      params: {
        data: { productId }
      }
    }
  }) => {
    const handleAddToCart = useCallback(() => addProductToCart({ id }), [id, addProductToCart]);

    useEffect(() => {
      fetchProductDetails({
        productId
      });

      return clearDetails;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
      return <LoadingSpinner />;
    }

    return (
      <ScrollView>
        <View style={styles.mainInformationContainer}>
          <ImageSwiper height={320} images={imageUris} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
            {oldPrice && (
              <>
                <Text style={styles.oldPrice}>{oldPrice}</Text>
                <Text style={styles.discount}>Sale</Text>
              </>
            )}
          </View>
        </View>
        <Divider size={12} />
        <ProductSection title="Description">
          <Text style={styles.description}>{description}</Text>
        </ProductSection>
        <View style={styles.buttonGroup}>
          <LikeButton
            containerStyle={StyleSheet.flatten([styles.button, styles.wishListButtonContainer])}
            textStyle={styles.buttonText}
          />
          <Button
            title="Add To Cart"
            containerStyle={styles.button}
            textStyle={StyleSheet.flatten([styles.buttonText, styles.addToCartButton])}
            onPress={handleAddToCart}
          />
        </View>
      </ScrollView>
    );
  }
);

ProductDetails.displayName = ScreenName.ProductDetails;
