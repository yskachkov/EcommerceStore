import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import mockReactNativeReanimated from 'react-native-reanimated/mock';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('react-native-reanimated', () => mockReactNativeReanimated);
jest.mock('@react-native-community/netinfo', () => ({
  addEventListener: jest.fn()
}));
