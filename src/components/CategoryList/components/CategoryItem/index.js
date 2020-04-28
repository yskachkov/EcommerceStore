import React, { useCallback } from 'react';
import { View } from 'react-native';

import { withMemo } from 'src/HOCs';
import { CategoryHeader, CategoryContent } from 'src/components/CategoryList/components';
import styles from './CategoryItem.styles';

export const CategoryItem = withMemo(({ id, title, products, onCategoryPress, onProductPress }) => {
  const handleViewAllPress = useCallback(() => onCategoryPress(id), [id, onCategoryPress]);

  return (
    <View style={styles.container}>
      <CategoryHeader title={title} onViewAll={handleViewAllPress} />
      <View style={styles.contentContainer}>
        <CategoryContent data={products} onProductPress={onProductPress} />
      </View>
    </View>
  );
});

CategoryItem.displayName = 'CategoryItem';
