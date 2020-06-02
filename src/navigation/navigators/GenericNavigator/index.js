import React, { memo, useCallback } from 'react';

export const GenericNavigator = memo(
  ({ navigator: Navigator, screen: Screen, screenConfigs, screenRenderer, ...props }) => {
    const renderNavigatorScreens = useCallback(
      () =>
        screenConfigs.map(config =>
          screenRenderer ? screenRenderer(config) : <Screen key={config.name} {...config} />
        ),
      [screenConfigs, screenRenderer]
    );

    return <Navigator {...props}>{renderNavigatorScreens()}</Navigator>;
  }
);

GenericNavigator.displayName = 'GenericNavigator';
