import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listContainer: {
    marginHorizontal: 15
  },
  listColumnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 7
  },
  productListItem: {
    flexDirection: 'column',
    flexBasis: '48%',
    marginBottom: 5,
    paddingTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 5
  },
  productImage: {
    alignSelf: 'center',
    marginBottom: 15
  }
});
