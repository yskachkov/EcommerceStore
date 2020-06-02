import { ScreenName } from 'src/constants/navigationScreenNames';
import { CategoryProductsScreen, MainScreen, ProductDetailsScreen } from 'src/screens';
import { ScreenHeader } from 'src/navigation/components';

export const navigatorScreenOptions = {
  header: ScreenHeader
};

export const navigatorScreenConfigs = [
  {
    name: ScreenName.Main,
    component: MainScreen,
    options: {
      title: 'Ecommerce Store'
    },
    initialParams: {
      headerProps: {
        withSearchBar: true,
        withCart: true
      }
    }
  },
  {
    name: ScreenName.ProductDetails,
    component: ProductDetailsScreen,
    initialParams: {
      headerProps: {
        withSearch: true,
        withCart: true
      }
    }
  },
  {
    name: ScreenName.CategoryProducts,
    component: CategoryProductsScreen,
    initialParams: {
      headerProps: {
        withSearch: true,
        withCart: true
      }
    }
  }
];
