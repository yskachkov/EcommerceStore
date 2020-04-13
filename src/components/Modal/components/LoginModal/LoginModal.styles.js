import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

const commonButtonStyles = {
  width: 100
};

export default StyleSheet.create({
  button: commonButtonStyles,
  loginButton: {
    ...commonButtonStyles,
    marginRight: 30
  },
  buttonText: {
    color: colors.white,
    fontSize: 18
  }
});
