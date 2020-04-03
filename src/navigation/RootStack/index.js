import { withUser } from 'src/store/connectors';
import { RootStack } from './RootNavigationStack';

export const RootNavigationStack = withUser(RootStack);
