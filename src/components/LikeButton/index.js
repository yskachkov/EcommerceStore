import React, { memo, useState, useCallback } from 'react';

import { Button } from 'src/components';

export const LikeButton = memo(({ buttonStyle, containerStyle }) => {
  const [isActive, toggleActivity] = useState(false);

  const handleToggle = useCallback(() => toggleActivity(!isActive), [isActive]);

  return (
    <Button
      type="clear"
      title="Wish List"
      buttonStyle={buttonStyle}
      containerStyle={containerStyle}
      onPress={handleToggle}
    />
  );
});

LikeButton.displayName = 'LikeButton';
