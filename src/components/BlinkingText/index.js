import React, { memo, useRef, useEffect, useMemo, useCallback } from 'react';
import { Animated, StyleSheet } from 'react-native';

export const BlinkingText = memo(({ interval = 1500, children, style, ...props }) => {
  const { current: blinkAnimation } = useRef(new Animated.Value(1));

  useEffect(() => {
    blink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const textStyle = useMemo(
    () =>
      StyleSheet.flatten([
        style,
        {
          opacity: blinkAnimation.interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
            outputRange: [0, 0.1, 0.3, 0.5, 0.8, 1]
          })
        }
      ]),
    [blinkAnimation, style]
  );

  const blink = useCallback(() => {
    blinkAnimation.setValue(1);

    Animated.timing(blinkAnimation, {
      toValue: 0,
      duration: interval,
      useNativeDriver: true
    }).start(() => blink());
  }, [blinkAnimation, interval]);

  return (
    <Animated.Text {...props} style={textStyle}>
      {children}
    </Animated.Text>
  );
});

BlinkingText.displayName = 'BlinkingText';
