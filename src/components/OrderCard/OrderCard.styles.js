import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  row: {
    marginBottom: 10
  },
  rowLabel: {
    color: colors.bostonBlue,
    fontSize: 18
  },
  rowValue: {
    fontSize: 18
  }
});
