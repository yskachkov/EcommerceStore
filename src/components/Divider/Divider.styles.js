import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: (size = 1, color = colors.gallery) => ({
    height: size,
    backgroundColor: color
  })
});
