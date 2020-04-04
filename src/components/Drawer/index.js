import React, { memo } from 'react';
import { View } from 'react-native';

import { colors } from 'src/assets/styles/colors';
import { Divider } from 'src/components';
import { DrawerHeader, DrawerMain } from './components';
import styles from './Drawer.styles';

export const Drawer = memo(({ title, ...props }) => (
  <View style={styles.container}>
    <DrawerHeader title={title} />
    <Divider color={colors.bostonBlue} />
    <DrawerMain {...props} />
  </View>
));

Drawer.displayName = 'Drawer';
