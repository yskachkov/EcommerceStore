import { LayoutAnimation } from 'react-native';

export const heartAnimation = LayoutAnimation.create(
  200,
  LayoutAnimation.Types.linear,
  LayoutAnimation.Properties.scaleXY
);
