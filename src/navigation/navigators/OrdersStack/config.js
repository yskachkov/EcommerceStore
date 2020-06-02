import { ScreenName } from 'src/constants/navigationScreenNames';
import { OrdersScreen, MapScreen } from 'src/screens';
import { ScreenHeader } from 'src/navigation/components';

export const navigatorScreenOptions = {
  header: ScreenHeader
};

export const navigatorScreenConfigs = [
  {
    name: ScreenName.Orders,
    component: OrdersScreen,
    initialParams: {
      title: 'My Orders',
      headerProps: {
        withCart: true
      }
    }
  },
  {
    name: ScreenName.Map,
    component: MapScreen,
    initialParams: {
      headerProps: {
        withCart: true
      }
    }
  }
];
