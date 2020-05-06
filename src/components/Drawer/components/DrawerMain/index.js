import React, { memo, useMemo } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import get from 'lodash/get';

import { Divider } from 'src/components';
import { MyAccountSection, SupportSection, OthersSection } from './components';
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
      <MyAccountSection {...props} state={drawerState} labelStyle={styles.drawerItemLabel} />
      <Divider />
      <SupportSection />
      <Divider />
      <OthersSection />
    </DrawerContentScrollView>
  );
});

DrawerMain.displayName = 'DrawerMain';
