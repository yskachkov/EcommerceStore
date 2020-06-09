import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gallery
  },
  textContainer: {
    alignItems: 'center',
    marginLeft: 10
  },
  text: {
    color: colors.scorpion,
    fontSize: 13
  }
});
