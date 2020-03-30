import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    marginRight: 40,
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderWidth: 1,
    borderColor: colors.black
  },
  text: {
    fontSize: 14
  }
});
