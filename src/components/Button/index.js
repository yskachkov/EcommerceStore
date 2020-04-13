import React, { memo, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import isString from 'lodash/isString';

import { BUTTON_ACTIVE_OPACITY } from './constants';
import { ButtonType } from './config';
import { BlinkingText } from 'src/components';
import styles from './Button.styles';

export const Button = memo(
  ({
    loading,
    loadingTitle = 'Loading ...',
    type = ButtonType.Solid,
    title,
    iconRight,
    icon,
    disabled,
    containerStyle,
    textStyle,
    onPress
  }) => {
    const buttonTypes = useMemo(() => Object.values(ButtonType), []);

    if (!buttonTypes.includes(type)) {
      return null;
    }

    const isTitleString = useMemo(() => isString(title), [title]);

    return (
      <TouchableOpacity
        disabled={disabled}
        accessibilityRole="button"
        activeOpacity={BUTTON_ACTIVE_OPACITY}
        style={StyleSheet.flatten([styles[type], containerStyle])}
        onPress={onPress}
      >
        {loading ? (
          <BlinkingText style={textStyle}>{loadingTitle}</BlinkingText>
        ) : (
          <>
            {!iconRight && icon}
            {isTitleString ? <Text style={textStyle}>{title}</Text> : title}
            {iconRight && icon}
          </>
        )}
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';
