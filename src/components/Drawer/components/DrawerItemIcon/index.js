import React, { memo } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'src/assets/styles/colors';
import styles from './DrawerItemIcon.styles';

export const DrawerItemIcon = memo(props => (
  <View style={styles.container}>
    <Icon {...props} solid size={25} color={colors.bostonBlue} />
  </View>
));

DrawerItemIcon.displayName = 'DrawerItemIcon';
