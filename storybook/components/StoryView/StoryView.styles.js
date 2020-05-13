import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  row: {
    flexBasis: '50%',
    justifyContent: 'center'
  }
});
