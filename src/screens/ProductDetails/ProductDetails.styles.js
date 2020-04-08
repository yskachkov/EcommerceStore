import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  mainInformationContainer: {
    paddingVertical: 25,
    paddingHorizontal: 30,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 20
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  price: {
    fontWeight: '700',
    fontSize: 18
  },
  oldPrice: {
    marginLeft: 10,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontWeight: '700',
    fontSize: 15
  },
  discount: {
    marginLeft: 10,
    color: colors.bostonBlue,
    fontWeight: '700',
    fontSize: 15
  },
  description: {
    fontSize: 17
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  buttonContainer: {
    flex: 1,
    padding: 15
  },
  wishListButtonContainer: {
    borderTopWidth: 0.5,
    borderTopColor: colors.bostonBlue,
    backgroundColor: colors.white
  },
  button: {
    fontSize: 16
  },
  addToCartButton: {
    color: colors.white
  }
});
