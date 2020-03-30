import React, { memo } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { dummyImages, dummyProduct } from './';
import { colors } from 'src/assets/styles/colors';
import { Header, ImageSwiper, Divider, Button, LikeButton } from 'src/components';
import { ProductSection, ProductColorSelector } from './components';
import styles from './ProductDetails.styles';

export const ProductDetails = memo(
  ({
    images = dummyImages,
    title = dummyProduct.title,
    oldPrice = dummyProduct.oldPrice,
    price = dummyProduct.price,
    discount = dummyProduct.discount,
    colors: availableColors = dummyProduct.colors,
    description = dummyProduct.description
  }) => (
    <ScrollView>
      <Header withSearch withCart />
      <View style={styles.mainInformationContainer}>
        <ImageSwiper height={320} data={images} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {price}</Text>
          {oldPrice && <Text style={styles.oldPrice}>$ {oldPrice}</Text>}
          {discount && <Text style={styles.discount}>{discount} % Off</Text>}
        </View>
      </View>
      <Divider size={12} color={colors.gallery} />
      <ProductSection title="Select color">
        <ProductColorSelector options={availableColors} />
      </ProductSection>
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
  )
);

ProductDetails.displayName = 'ProductDetails';
