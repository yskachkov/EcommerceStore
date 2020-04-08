import React, { memo, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Preview } from './components';
import styles from './ProductPreview.styles';

export const ProductPreview = memo(({ data, keyProperty = 'id', style, ...props }) => {
  const renderItem = useCallback(
    ({ item, index }) => {
      const previewElementNotLast = index !== data.length - 1;

      return <Preview {...item} style={previewElementNotLast ? styles.previewItem : null} />;
    },
    [data]
  );

  return (
    <FlatList
      {...props}
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item[keyProperty]}
      contentContainerStyle={StyleSheet.flatten([styles.previewList, style])}
    />
  );
});

ProductPreview.displayName = 'ProductPreview';
