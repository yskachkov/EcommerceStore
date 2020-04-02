import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: colors.bostonBlue,
    fontSize: 20
  },
  viewAllButtonContainer: {
    borderRadius: 3,
    paddingTop: 5,
    paddingHorizontal: 20,
    paddingBottom: 3
  },
  viewAllButton: {
    color: colors.white,
    fontSize: 12
  }
});
