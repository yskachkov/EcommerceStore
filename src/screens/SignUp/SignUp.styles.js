import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  gradientView: {
    flex: 1
  },
  view: {
    paddingTop: 120,
    paddingRight: 25,
    paddingBottom: 25,
    paddingLeft: 25
  },
  title: {
    width: 200,
    marginBottom: 50,
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
    marginBottom: 20,
    fontSize: 18
  },
  confirmPasswordInput: {
    marginBottom: 25
  },
  resetPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 15
  },
  submitButton: {
    marginBottom: 15
  },
  signInButton: {
    alignSelf: 'center'
  }
});
