import PersistentStorage from 'react-native-persistent-storage';

class StorageService {
  get(key) {
    return PersistentStorage.get(key);
  }

  set(key, value) {
    return PersistentStorage.set(key, value);
  }

  remove(key) {
    return PersistentStorage.remove(key);
  }

  clear() {
    return PersistentStorage.clear();
  }
}

export const Storage = new StorageService();
