import React from 'react';

import { ScreenName } from 'src/constants/screenNames';
import { LoginScreen, SignUpScreen, MainScreen, ProductDetailsScreen } from 'src/screens';
import { Header } from 'src/components/Header';

export const navigatorScreenOptions = {
  header: ({
    scene: {
      route: { params: { headerProps } = {} },
      descriptor: {
        options: { title, headerTransparent }
      }
    },
    navigation: { goBack }
  }) => (
    <Header
      {...headerProps}
      title={title}
      transparent={headerTransparent}
      onBackButtonPress={goBack}
    />
  )
};

export const navigatorScreenConfigs = [
  {
    name: ScreenName.Login,
    component: LoginScreen,
    props: {
      options: {
        headerShown: false
      }
    }
  },
  {
    name: ScreenName.SignUp,
    component: SignUpScreen,
    props: {
      options: {
        headerTransparent: true
      }
    }
  },
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
