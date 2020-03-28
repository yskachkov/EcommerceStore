import React, { memo } from 'react';
import { Text } from 'react-native';

import styles from './Link.styles.js';

export const Link = memo(({ children, style = {}, ...props }) => (
  <Text {...props} accessibilityRole="link" style={[styles.link, style]}>
    {children}
  </Text>
));

Link.displayName = 'Link';
