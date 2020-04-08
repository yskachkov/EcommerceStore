import React from 'react';

import { ScreenName } from 'src/constants/screenNames';
import { CategoryProductsScreen, MainScreen, ProductDetailsScreen } from 'src/screens';
import { Header } from 'src/components';

export const navigatorScreenOptions = {
  header: ({
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
  }
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
  },
  {
    name: ScreenName.CategoryProducts,
    component: CategoryProductsScreen,
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
