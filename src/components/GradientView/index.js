import React, { memo } from 'react';
import { View } from 'react-native';

import { gradientColors, gradientLocations } from './config';

export const GradientView = memo(({ children, ...props }) => (
  <View colors={gradientColors} locations={gradientLocations} {...props}>
    {children}
  </View>
));

GradientView.displayName = 'GradientView';
