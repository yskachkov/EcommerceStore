import React from 'react';

import { ScreenName } from 'src/constants/navigationScreenNames';
import { MainStack, OrdersStack, CartStack } from 'src/navigation/navigators';
import { DummyScreen } from 'src/screens';
import { Drawer } from 'src/components';
import { DrawerItemIcon } from 'src/components/Drawer/components';

export const renderDrawerContent = props => <Drawer title="Ecommerce Store" {...props} />;

const renderDrawerItemIcon = iconName => () => <DrawerItemIcon name={iconName} />;

export const navigatorScreenOptions = {
  swipeEnabled: false
};

export const navigatorScreenConfigs = [
  {
    name: ScreenName.Profile,
    component: DummyScreen,
    options: {
      drawerLabel: 'My Profile',
      drawerIcon: renderDrawerItemIcon('user')
    }
  },
  {
    name: ScreenName.WishList,
    component: DummyScreen,
    options: {
      drawerLabel: 'My Wish List',
      drawerIcon: renderDrawerItemIcon('heart')
    }
  },
  {
    name: ScreenName.Cart,
    component: CartStack,
    options: {
      drawerLabel: 'My Cart',
      drawerIcon: renderDrawerItemIcon('shopping-cart'),
      unmountOnBlur: true
    }
  },
  {
    name: ScreenName.OrdersStack,
    component: OrdersStack,
    options: {
      drawerLabel: 'My Orders',
      drawerIcon: renderDrawerItemIcon('cart-arrow-down')
    }
  },
  {
    name: ScreenName.MainStack,
    component: MainStack,
    options: {
      swipeeEnabled: true
    },
    initialParams: {
      hiddenDrawerItem: true
    }
  }
];
