import mockReactNativeReanimated from 'react-native-reanimated/mock';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock('react-native-reanimated', () => mockReactNativeReanimated);

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
