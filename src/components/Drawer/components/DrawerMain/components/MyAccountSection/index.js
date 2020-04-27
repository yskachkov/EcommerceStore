import React, { memo } from 'react';
import { DrawerItemList } from '@react-navigation/drawer';

import { DrawerSection } from 'src/components/Drawer/components';
import { colors } from 'src/assets/styles/colors';

export const MyAccountSection = memo(props => (
  <DrawerSection title="My Account">
    <DrawerItemList
      {...props}
      activeTintColor={colors.white}
      inactiveTintColor={colors.black}
      activeBackgroundColor={colors.bostonBlue}
    />
  </DrawerSection>
));

MyAccountSection.displayName = 'MyAccountSection';
