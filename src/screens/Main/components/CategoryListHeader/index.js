import React from 'react';
import { View } from 'react-native';

import { withMemo } from 'src/HOCs';
import { ProductPreview, Divider } from 'src/components';
import styles from './CategoryListHeader.styles';

export const CategoryListHeader = withMemo(({ categories, onPreviewPress }) => (
  <View style={styles.container}>
    <ProductPreview data={categories} onPress={onPreviewPress} />
    <Divider size={12} />
  </View>
));

CategoryListHeader.displayName = 'CategoryListHeader';
