import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    marginTop: 1,
    marginHorizontal: 1,
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: colors.white,
    flexDirection: 'row',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
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
