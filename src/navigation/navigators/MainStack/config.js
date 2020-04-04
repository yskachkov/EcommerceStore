import React from 'react';

import { ScreenName } from 'src/constants/screenNames';
import { MainScreen, ProductDetailsScreen } from 'src/screens';
import { Header } from 'src/components';

export const navigatorScreenOptions = {
  header: ({
    scene: {
      route: { params: { headerProps } = {} },
      descriptor: {
        options: { title, headerTransparent }
      }
    },
    navigation: { goBack, toggleDrawer }
  }) => (
    <Header
      {...headerProps}
      title={title}
      transparent={headerTransparent}
      onBackButtonPress={goBack}
      onDrawerToggle={toggleDrawer}
    />
  )
};

export const navigatorScreenConfigs = [
  {
    name: ScreenName.Main,
    component: MainScreen,
    props: {
      options: {
        title: 'Ecommerce Store'
      },
      initialParams: {
        headerProps: {
          withSearchBar: true,
          withCart: true
        }
      }
    }
  },
  {
    name: ScreenName.ProductDetails,
    component: ProductDetailsScreen,
    props: {
      initialParams: {
        headerProps: {
          withSearch: true,
          withCart: true
        }
      }
    }
  }
];
