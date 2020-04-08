import React, { memo, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { ScreenName } from 'src/constants/screenNames';
import { colors } from 'src/assets/styles/colors';
import { ImageSwiper, Divider, Button, LikeButton } from 'src/components';
import { ProductSection } from './components';
import styles from './ProductDetails.styles';

export const ProductDetails = memo(
  ({
    data: { images = [], name, oldPrice, price, description },
    fetchData,
    clearDetails,
    route: {
      params: {
        data: { productId }
      }
    }
  }) => {
    useEffect(() => {
      fetchData({
        productId
      });

      return clearDetails;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <ScrollView>
        <View style={styles.mainInformationContainer}>
          <ImageSwiper height={320} images={images} />
          <Text style={styles.title}>{name}</Text>
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
        <Divider size={12} color={colors.gallery} />
        <ProductSection title="Description">
          <Text style={styles.description}>{description}</Text>
        </ProductSection>
        <View style={styles.buttonGroup}>
          <LikeButton
            containerStyle={StyleSheet.flatten([
              styles.buttonContainer,
              styles.wishListButtonContainer
            ])}
            buttonStyle={styles.button}
          />
          <Button
            title="Add To Cart"
            containerStyle={styles.buttonContainer}
            buttonStyle={StyleSheet.flatten([styles.button, styles.addToCartButton])}
          />
        </View>
      </ScrollView>
    );
  }
);

ProductDetails.displayName = ScreenName.ProductDetails;
