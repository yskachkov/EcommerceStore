import React, { memo, useMemo } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import get from 'lodash/get';

import { colors } from 'src/assets/styles/colors';
import { Divider } from 'src/components';
import { DrawerSection, DrawerCustomItem } from 'src/components/Drawer/components';
import styles from './DrawerMain.styles';

export const DrawerMain = memo(({ state: { routes, ...state }, ...props }) => {
  const drawerState = useMemo(
    () => ({
      ...state,
      routes: routes.filter(({ params }) => !get(params, 'hiddenDrawerItem', false))
    }),
    [routes, state]
  );

  return (
    <DrawerContentScrollView>
      <DrawerSection title="My Account">
        <DrawerItemList
          {...props}
          state={drawerState}
          activeTintColor={colors.white}
          inactiveTintColor={colors.black}
          activeBackgroundColor={colors.bostonBlue}
          labelStyle={styles.drawerItemLabel}
        />
      </DrawerSection>
      <Divider size={1} color={colors.gallery} />
      <DrawerSection title="Support">
        <DrawerCustomItem label="Email" iconName="envelope" labelStyle={styles.drawerItemLabel} />
        <DrawerCustomItem
          label="Call"
          iconName="phone-volume"
          labelStyle={styles.drawerItemLabel}
        />
      </DrawerSection>
      <Divider size={1} color={colors.gallery} />
      <DrawerSection title="Others">
        <DrawerCustomItem label="Share" iconName="share-alt" labelStyle={styles.drawerItemLabel} />
      </DrawerSection>
    </DrawerContentScrollView>
  );
});

DrawerMain.displayName = 'DrawerMain';
