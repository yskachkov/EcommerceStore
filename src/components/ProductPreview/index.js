import React, { memo, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Preview } from './components';
import styles from './ProductPreview.styles';

export const ProductPreview = memo(({ keyProperty = 'id', style, ...props }) => {
  const renderItem = useCallback(({ item: { title } }) => <Preview title={title} />, []);

  return (
    <FlatList
      {...props}
      horizontal
      renderItem={renderItem}
      keyExtractor={item => item[keyProperty]}
      style={StyleSheet.flatten([styles.list, style])}
    />
  );
});

ProductPreview.displayName = 'ProductPreview';
