import { useEffect } from 'react';
import { Vibration } from 'src/services';

export const useVibration = skipCondition => {
  useEffect(() => {
    if (skipCondition) {
      return;
    }

    Vibration.vibrate();

    return Vibration.cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
