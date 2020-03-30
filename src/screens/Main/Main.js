import React, { memo } from 'react';

import { dummyCategories, dummySections } from './';
import { ProductSectionList } from 'src/components';
import { MainHeader } from './components';

export const Main = memo(({ productCategories = dummyCategories, sections = dummySections }) => (
  <ProductSectionList
    ListHeaderComponent={<MainHeader productCategories={productCategories} />}
    sections={sections}
  />
));

Main.displayName = 'Main';
