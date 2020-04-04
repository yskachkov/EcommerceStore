import React, { memo, useCallback } from 'react';
import { DrawerItem } from '@react-navigation/drawer';

import { colors } from 'src/assets/styles/colors';
import { DrawerItemIcon } from 'src/components/Drawer/components';

export const DrawerCustomItem = memo(({ iconName, ...props }) => {
  const renderIcon = useCallback(() => <DrawerItemIcon name={iconName} />, [iconName]);

  return (
    <DrawerItem
      {...props}
      icon={renderIcon}
      activeTintColor={colors.white}
      inactiveTintColor={colors.black}
      activeBackgroundColor={colors.bostonBlue}
    />
  );
});

DrawerCustomItem.displayName = 'DrawerCustomItem';
