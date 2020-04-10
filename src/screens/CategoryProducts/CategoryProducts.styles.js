import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 5,
    backgroundColor: colors.white
  },
  productList: {
    minHeight: 135
  },
  productImage: {
    marginRight: 50
  }
});
