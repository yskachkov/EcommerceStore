import ReactNativeToast from 'react-native-toast';

class ToastsService {
  show(message, duration = ReactNativeToast.LONG) {
    ReactNativeToast.show(message, duration);
  }

  hide() {
    ReactNativeToast.hide();
  }
}

export const Toasts = new ToastsService();
