import React, { memo, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'src/assets/styles/colors';
import { Button } from 'src/components';
import styles from './LikeButton.styles';

export const LikeButton = memo(({ buttonStyle, containerStyle }) => {
  const [isActive, toggleActivity] = useState(false);

  const handleToggle = useCallback(() => toggleActivity(!isActive), [isActive]);

  return (
    <Button
      type="clear"
      title="Wish List"
      icon={
        <Icon
          solid={isActive}
          name="heart"
          size={25}
          color={colors.bostonBlue}
          style={styles.icon}
        />
      }
      buttonStyle={buttonStyle}
      containerStyle={containerStyle}
      onPress={handleToggle}
    />
  );
});

LikeButton.displayName = 'LikeButton';
