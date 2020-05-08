import ReactNativePushNotification from 'react-native-push-notification';

class PushNotificationService {
  show(options) {
    ReactNativePushNotification.localNotification(options);
  }

  cancel() {
    ReactNativePushNotification.cancelAllLocalNotifications();
  }
}

export const PushNotification = new PushNotificationService();
