import React from 'react';

import { Header } from 'src/components';

export const ScreenHeader = ({
  scene: {
    route: { params: { title: paramsTitle, headerProps } = {} },
    descriptor: {
      options: { title: optionsTitle, headerTransparent }
    }
  },
  navigation: { goBack, toggleDrawer }
}) => {
  const title = optionsTitle || paramsTitle;

  return (
    <Header
      {...headerProps}
      title={title}
      transparent={headerTransparent}
      onBackButtonPress={goBack}
      onDrawerToggle={toggleDrawer}
    />
  );
};
