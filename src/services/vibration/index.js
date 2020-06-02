import { Vibration as ReactNativeVibration } from 'react-native';

import { VIBRATION_PATTERN } from './constants';

class VibrationService {
  _pattern = VIBRATION_PATTERN;

  setPattern(pattern) {
    this._pattern = pattern;
  }

  vibrate() {
    ReactNativeVibration.vibrate(this._pattern);
  }

  cancel() {
    ReactNativeVibration.cancel();
  }
}

export const Vibration = new VibrationService();
