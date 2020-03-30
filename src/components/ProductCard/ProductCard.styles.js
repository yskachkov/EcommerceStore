import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.alto,
    borderRadius: 5
  },
  image: {
    width: 80,
    height: 100
  },
  infoContainer: {
    flexDirection: 'row'
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  discount: {
    color: colors.bostonBlue,
    fontWeight: '700'
  }
});
