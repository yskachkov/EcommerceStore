import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useNetInfoConnection = ({ onConnectionLost }) =>
  useEffect(() => {
    return NetInfo.addEventListener(({ isConnected }) => {
      if (isConnected) {
        return;
      }

      onConnectionLost();
    });
  });
