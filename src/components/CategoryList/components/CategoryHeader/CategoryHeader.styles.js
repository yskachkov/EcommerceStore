import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  title: {
    color: colors.bostonBlue,
    fontSize: 20
  },
  viewAllButton: {
    borderRadius: 3,
    paddingTop: 5,
    paddingHorizontal: 20,
    paddingBottom: 3
  },
  viewAllButtonText: {
    color: colors.white,
    fontSize: 12
  }
});
