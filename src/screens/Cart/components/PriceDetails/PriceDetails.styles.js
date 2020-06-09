import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'column'
  },
  title: {
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.gallery,
    paddingBottom: 15,
    textTransform: 'uppercase',
    color: colors.scorpion,
    fontWeight: '700',
    fontSize: 15
  },
  detailRow: {
    marginBottom: 10
  },
  itemsAmount: {
    fontWeight: '700'
  },
  total: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    paddingTop: 15
  }
});
