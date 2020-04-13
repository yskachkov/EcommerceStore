import React, { memo, useRef, useMemo, useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

export const FadeInView = memo(
  ({ delay, duration, easing = Easing.out(Easing.exp), children, style }) => {
    const { current: fadeAnimation } = useRef(new Animated.Value(0));

    const viewStyle = useMemo(
      () =>
        StyleSheet.flatten([
          style,
          {
            opacity: fadeAnimation,
            transform: [
              {
                translateY: fadeAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-1000, 0]
                })
              }
            ]
          }
        ]),
      [fadeAnimation, style]
    );

    useEffect(() => {
      Animated.timing(fadeAnimation, {
        delay,
        duration,
        easing,
        toValue: 1,
        useNativeDriver: true
      }).start();

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Animated.View style={viewStyle}>{children}</Animated.View>;
  }
);

FadeInView.displayName = 'FadeInView';
