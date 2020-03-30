import React, { memo, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { BUTTON_ACTIVE_OPACITY } from './constants';
import { ButtonType } from './config';
import styles from './Button.styles';

export const Button = memo(
  ({ type = ButtonType.Solid, title, iconRight, icon, containerStyle, buttonStyle, onPress }) => {
    const buttonTypes = useMemo(() => Object.values(ButtonType), []);

    if (!buttonTypes.includes(type)) {
      return null;
    }

    return (
      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={BUTTON_ACTIVE_OPACITY}
        style={StyleSheet.flatten([styles[type], containerStyle])}
        onPress={onPress}
      >
        <>
          {!iconRight && icon}
          <Text style={buttonStyle}>{title}</Text>
          {iconRight && icon}
        </>
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';
