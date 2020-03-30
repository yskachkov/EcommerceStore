import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

const commonButtonStyles = {
  flexDirection: 'row',
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center'
};

export default StyleSheet.create({
  solid: {
    ...commonButtonStyles,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: colors.bostonBlue
  },
  clear: {
    ...commonButtonStyles
  },
  outline: {
    ...commonButtonStyles,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.bostonBlue
  }
});
