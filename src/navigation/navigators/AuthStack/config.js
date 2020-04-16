import { ScreenName } from 'src/constants/navigationScreenNames';
import { LoginScreen, SignUpScreen } from 'src/screens';
import { MainDrawer } from 'src/navigation/navigators';

export const navigatorScreenConfigs = [
  {
    name: ScreenName.Login,
    component: LoginScreen
  },
  {
    name: ScreenName.SignUp,
    component: SignUpScreen
  },
  {
    name: ScreenName.MainDrawer,
    component: MainDrawer
  }
];
