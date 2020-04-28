import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  gradientView: {
    flex: 1
  },
  backButton: {
    alignSelf: 'flex-start'
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 25,
    paddingBottom: 120
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
    marginBottom: 15,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.black,
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
  submitButtonText: {
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: '600',
    fontSize: 18
  },
  signInLink: {
    alignSelf: 'center'
  }
});
