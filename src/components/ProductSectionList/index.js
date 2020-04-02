import React, { memo, useCallback } from 'react';
import { SectionList } from 'react-native';
import get from 'lodash/get';
import first from 'lodash/first';

import { ProductSectionHeader, ProductSectionContent } from './components';

export const ProductSectionList = memo(({ keyProperty = 'id', onProductPress, ...props }) => {
  const renderSectionHeader = useCallback(
    ({ section: { title } }) => <ProductSectionHeader title={title} />,
    []
  );

  const renderSectionItems = useCallback(
    ({ item: sectionItems }) => (
      <ProductSectionContent data={sectionItems} onProductPress={onProductPress} />
    ),
    [onProductPress]
  );

  const keyExtractor = useCallback(item => get(first(item), keyProperty), [keyProperty]);

  return (
    <SectionList
      {...props}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderSectionItems}
      keyExtractor={keyExtractor}
    />
  );
});

ProductSectionList.displayName = 'ProductSectionList';
