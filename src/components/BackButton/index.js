import React, { memo } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'src/assets/styles/colors';
import { Button } from 'src/components';

export const BackButton = memo(({ color = colors.tundora, ...props }) => (
  <Button {...props} type="clear" icon={<Icon name="arrow-left" size={30} color={color} />} />
));

BackButton.displayName = 'BackButton';
