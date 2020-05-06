import React, { useCallback } from 'react';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { Header } from 'src/components';

export const ScreenHeader = ({
  scene: {
    route: { params: { title: paramsTitle, headerProps } = {} },
    descriptor: {
      options: { title: optionsTitle, headerTransparent }
    }
  },
  navigation: { navigate, goBack, toggleDrawer }
}) => {
  const title = optionsTitle || paramsTitle;

  const handleCartPress = useCallback(() => navigate(ScreenName.Cart), [navigate]);

  return (
    <Header
      {...headerProps}
      title={title}
      transparent={headerTransparent}
      onBackButtonPress={goBack}
      onDrawerToggle={toggleDrawer}
      onCartPress={handleCartPress}
    />
  );
};

ScreenHeader.displayName = 'ScreenHeader';
