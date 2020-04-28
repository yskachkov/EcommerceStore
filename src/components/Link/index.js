import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'src/components';
import styles from './Link.styles.js';

export const Link = memo(({ children, style = {}, ...props }) => (
  <Button {...props} type="clear" textStyle={StyleSheet.flatten([styles.link, style])} />
));

Link.displayName = 'Link';
