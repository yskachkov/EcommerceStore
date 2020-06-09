import React, { useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { withMemo } from 'src/HOCs';
import { Preview } from './components';
import styles from './ProductPreview.styles';

export const ProductPreview = withMemo(({ data, keyProperty = 'id', style, onPress, ...props }) => {
  const renderItem = useCallback(
    ({ item, index }) => {
      const previewElementNotLast = index !== data.length - 1;
      const previewStyle = previewElementNotLast ? styles.previewItem : null;

      const handlePreviewPress = () => onPress(item.id);

      return <Preview {...item} style={previewStyle} onPress={handlePreviewPress} />;
    },
    [data, onPress]
  );

  const keyExtractor = useCallback(({ [keyProperty]: keyValue }) => keyValue, [keyProperty]);

  return (
    <FlatList
      {...props}
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={StyleSheet.flatten([styles.previewList, style])}
    />
  );
});

ProductPreview.displayName = 'ProductPreview';
