import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  image: {
    width: 80,
    height: 100
  },
  title: {
    maxWidth: 200
  },
  priceContainer: {
    flexDirection: 'row'
  },
  price: {
    marginRight: 10,
    fontWeight: '700'
  },
  oldPrice: {
    marginRight: 10,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontWeight: '700'
  },
  discount: {
    color: colors.bostonBlue,
    fontWeight: '700'
  }
});
