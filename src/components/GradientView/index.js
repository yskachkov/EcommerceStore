import React, { memo } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { gradientColors, gradientLocations } from './config';

export const GradientView = memo(({ children, ...props }) => (
  <LinearGradient colors={gradientColors} locations={gradientLocations} {...props}>
    {children}
  </LinearGradient>
));

GradientView.displayName = 'GradientView';
