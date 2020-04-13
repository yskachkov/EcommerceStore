import React, { memo, useState, useCallback } from 'react';
import { LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from 'src/assets/styles/colors';
import { Button } from 'src/components';
import { heartAnimation } from './config';
import styles from './LikeButton.styles';

export const LikeButton = memo(({ textStyle, containerStyle }) => {
  const [isActive, toggleActivity] = useState(false);

  const handleToggle = useCallback(() => {
    LayoutAnimation.configureNext(heartAnimation);

    toggleActivity(!isActive);
  }, [isActive]);

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
      textStyle={textStyle}
      containerStyle={containerStyle}
      onPress={handleToggle}
    />
  );
});

LikeButton.displayName = 'LikeButton';
