import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  emptyCartTitle: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.scorpion
  },
  emptyCartText: {
    fontSize: 16,
    color: colors.scorpion
  },
  shopNowButtonContainer: {
    width: 150,
    marginTop: 30
  },
  shopNowButton: {
    color: colors.white
  },
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  productList: {
    marginTop: 12,
    marginBottom: 125,
    paddingHorizontal: 5
  },
  paymentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  proceedButtonContainer: {
    paddingVertical: 15
  },
  proceedButton: {
    color: colors.white,
    fontSize: 18
  }
});
