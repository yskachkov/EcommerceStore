import React, { memo, useCallback } from 'react';
import Share from 'react-native-share';

import { DrawerCustomItem, DrawerSection } from 'src/components/Drawer/components';
import { shareOptions } from './config';

export const OthersSection = memo(props => {
  const handleShareOptionPress = useCallback(() => Share.open(shareOptions), []);

  return (
    <DrawerSection title="Others">
      <DrawerCustomItem
        {...props}
        label="Share"
        iconName="share-alt"
        onPress={handleShareOptionPress}
      />
    </DrawerSection>
  );
});

OthersSection.displayName = 'OthersSection';
