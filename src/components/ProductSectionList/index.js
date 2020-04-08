import React, { memo, useCallback } from 'react';
import { StyleSheet, SectionList } from 'react-native';
import get from 'lodash/get';
import first from 'lodash/first';

import { ProductSectionHeader, ProductSectionContent } from './components';
import styles from './ProductSectionList.styles';

export const ProductSectionList = memo(
  ({ keyProperty = 'id', style, onProductPress, onViewAllPress, ...props }) => {
    const renderSectionHeader = useCallback(
      ({ section: { id, name } }) => {
        const handleViewAllPress = () => onViewAllPress(id);

        return <ProductSectionHeader title={name} onViewAllPress={handleViewAllPress} />;
      },
      [onViewAllPress]
    );

    const renderSectionItems = useCallback(
      ({ item: categoryProducts }) => (
        <ProductSectionContent data={categoryProducts} onProductPress={onProductPress} />
      ),
      [onProductPress]
    );

    const keyExtractor = useCallback(item => get(first(item), keyProperty), [keyProperty]);

    return (
      <SectionList
        {...props}
        keyExtractor={keyExtractor}
        style={StyleSheet.flatten([styles.list, style])}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSectionItems}
      />
    );
  }
);

ProductSectionList.displayName = 'ProductSectionList';
