import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: (size = 1, color) => ({
    height: size,
    backgroundColor: color
  })
});
