import { withUser } from 'src/store/connectors';
import { Navigator } from './Navigator';

export const AppNavigator = withUser(Navigator);
