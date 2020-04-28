import React, { memo, useRef, useMemo, useCallback } from 'react';
import { StyleSheet, Animated } from 'react-native';

export const TouchableText = memo(({ children, style, ...props }) => {
  const { current: scaleAnimation } = useRef(new Animated.Value(0));

  const textStyle = useMemo(
    () =>
      StyleSheet.flatten([
        style,
        {
          transform: [
            {
              scale: scaleAnimation.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 1.1, 1]
              })
            }
          ]
        }
      ]),
    [scaleAnimation, style]
  );

  const handleLongPress = useCallback(() => {
    Animated.timing(scaleAnimation, {
      toValue: 1,
      useNativeDriver: true
    }).start(() => scaleAnimation.setValue(0));
  }, [scaleAnimation]);

  return (
    <Animated.Text {...props} style={textStyle} onLongPress={handleLongPress}>
      {children}
    </Animated.Text>
  );
});

TouchableText.displayName = 'TouchableText';
