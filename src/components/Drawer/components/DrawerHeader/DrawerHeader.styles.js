import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 30,
    paddingBottom: 40
  },
  title: {
    maxWidth: 180,
    color: colors.bostonBlue,
    fontWeight: '700',
    fontSize: 27
  }
});
