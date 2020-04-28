import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  iconContainer: {
    padding: 10,
    borderRadius: 7,
    backgroundColor: colors.bostonBlue
  },
  title: {
    marginTop: 5,
    color: colors.scorpion,
    fontWeight: '700',
    fontSize: 20
  },
  text: {
    color: colors.scorpion,
    fontSize: 16
  },
  loginButtonContainer: {
    marginTop: 30
  },
  loginButton: {
    width: 200,
    textAlign: 'center',
    color: colors.white,
    fontSize: 16
  }
});
