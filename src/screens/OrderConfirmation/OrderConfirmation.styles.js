import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
    color: colors.bostonBlue,
    fontWeight: '700',
    fontSize: 32
  },
  subTitle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 18
  },
  text: {
    marginTop: 30,
    textAlign: 'center',
    color: colors.scorpion,
    fontSize: 18
  },
  proceedButtonContainer: {
    marginTop: 25,
    paddingVertical: 15,
    paddingHorizontal: 40
  },
  proceedButton: {
    color: colors.bostonBlue,
    fontSize: 16
  }
});
