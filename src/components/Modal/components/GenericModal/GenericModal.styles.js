import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    maxWidth: '80%',
    paddingTop: 15,
    paddingHorizontal: 45,
    paddingBottom: 30,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: colors.white
  },
  icon: {
    marginBottom: 10
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  text: {
    marginBottom: 20,
    color: colors.doveGray,
    fontSize: 18,
    textAlign: 'center'
  },
  buttonWrapper: {
    flexDirection: 'row'
  }
});
