import React, { memo, useCallback } from 'react';
import { SectionList } from 'react-native';
import get from 'lodash/get';
import first from 'lodash/first';

import { SectionHeader, SectionContent } from './components';

export const ProductSectionList = memo(({ keyProperty = 'id', ...props }) => {
  const renderSectionHeader = useCallback(
    ({ section: { title } }) => <SectionHeader title={title} />,
    []
  );

  const renderSectionItems = useCallback(
    ({ item: sectionItems }) => <SectionContent data={sectionItems} />,
    []
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
