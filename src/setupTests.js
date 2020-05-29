import { configure as configureEnzyme } from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';
import MockDate from 'mockdate';
import mockReactNativeReanimated from 'react-native-reanimated/mock';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('react-native-reanimated', () => mockReactNativeReanimated);

jest.mock('react-native-keychain', () => ({
  setGenericPassword: jest.fn(),
  getGenericPassword: jest.fn(),
  resetGenericPassword: jest.fn()
}));

jest.mock('react-native-toast', () => ({
  show: jest.fn(),
  hide: jest.fn()
}));

jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn()
}));

jest.mock('@react-native-community/geolocation', () => ({
  addListener: jest.fn(),
  getCurrentPosition: jest.fn(),
  removeListeners: jest.fn(),
  requestAuthorization: jest.fn(),
  setConfiguration: jest.fn(),
  startObserving: jest.fn(),
  stopObserving: jest.fn()
}));

jest.mock('react-native-share', () => ({
  default: jest.fn()
}));

configureEnzyme({ adapter: new EnzymeReactAdapter() });

MockDate.set('2000-01-01T12:00:00.000Z');
