import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  option: isSelected => ({
    paddingVertical: 5,
    paddingHorizontal: 15,
    textTransform: 'uppercase',
    backgroundColor: colors.alto,
    fontSize: 15,
    ...(isSelected
      ? {
          backgroundColor: colors.bostonBlue,
          color: colors.white
        }
      : {})
  })
});
