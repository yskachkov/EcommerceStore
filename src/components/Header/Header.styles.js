import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 15,
    paddingLeft: 20,
    backgroundColor: colors.bostonBlue
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center'
  },
  title: {
    maxWidth: 180,
    color: colors.white,
    fontStyle: 'italic',
    fontSize: 20
  },
  searchIcon: {
    marginRight: 30,
    marginLeft: 'auto'
  },
  searchRow: {
    marginTop: 25
  },
  searchInput: {
    borderRadius: 7,
    backgroundColor: 'white',
    fontSize: 16
  }
});
