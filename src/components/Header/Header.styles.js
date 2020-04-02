import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingHorizontal: 15,
    backgroundColor: colors.bostonBlue
  },
  transparentContainer: {
    backgroundColor: 'transparent'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconButton: {
    left: -10
  },
  titleWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center'
  },
  title: {
    maxWidth: 180,
    alignSelf: 'center',
    color: colors.white,
    fontStyle: 'italic',
    fontSize: 20
  },
  searchIcon: {
    marginRight: 30,
    marginLeft: 'auto'
  },
  searchRow: {
    marginVertical: 15
  },
  searchInput: {
    borderRadius: 7,
    backgroundColor: 'white',
    fontSize: 16
  }
});
