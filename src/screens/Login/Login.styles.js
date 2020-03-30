import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  gradientView: {
    flex: 1
  },
  container: {
    paddingTop: 150,
    paddingRight: 25,
    paddingBottom: 120,
    paddingLeft: 25
  },
  title: {
    width: 200,
    marginBottom: 80,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.pictonBlue,
    fontSize: 35,
    lineHeight: 45
  },
  input: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.black,
    fontSize: 18
  },
  passwordInput: {
    marginBottom: 10
  },
  button: {
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: '600',
    fontSize: 18
  },
  resetPasswordLink: {
    alignSelf: 'flex-end',
    marginBottom: 15
  },
  submitButton: {
    marginBottom: 15
  },
  signUpLink: {
    alignSelf: 'center'
  },
  skipLoginButton: {
    color: colors.bostonBlue
  },
  skipIcon: {
    marginLeft: 15
  }
});
