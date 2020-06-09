import { ScreenName } from 'src/constants/navigationScreenNames';
import { CartScreen, OrderConfirmation } from 'src/screens';
import { ScreenHeader } from 'src/navigation/components';

export const navigatorScreenOptions = {
  header: ScreenHeader
};

export const navigatorScreenConfigs = [
  {
    name: ScreenName.Cart,
    component: CartScreen,
    options: {
      title: 'My Cart'
    }
  },
  {
    name: ScreenName.OrderConfirmation,
    component: OrderConfirmation,
    options: {
      headerShown: false
    }
  }
];
