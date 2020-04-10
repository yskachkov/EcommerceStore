import React, { useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { withMemo } from 'src/HOCs';
import { Preview } from './components';
import styles from './ProductPreview.styles';

export const ProductPreview = withMemo(({ data, keyProperty = 'id', style, onPress, ...props }) => {
  const renderItem = useCallback(
    ({ item, index }) => {
      const previewElementNotLast = index !== data.length - 1;
      const handlePreviewPress = () => onPress(item.id);

      return (
        <Preview
          {...item}
          style={previewElementNotLast ? styles.previewItem : null}
          onPress={handlePreviewPress}
        />
      );
    },
    [data, onPress]
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
