import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  gradientView: {
    flex: 1
  },
  view: {
    paddingTop: 150,
    paddingRight: 25,
    paddingBottom: 25,
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
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    fontSize: 18,
    marginBottom: 20
  },
  passwordInput: {
    marginBottom: 10
  },
  resetPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 15
  },
  submitButton: {
    marginBottom: 15
  },
  signUpButton: {
    alignSelf: 'center'
  }
});
