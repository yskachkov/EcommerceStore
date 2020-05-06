import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  leftColumnContainer: {
    flexBasis: '70%',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 15
  },
  price: {
    fontWeight: '700',
    fontSize: 15
  },
  quantity: {
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 15,
    fontSize: 15
  },
  rightColumnContainer: {
    alignItems: 'flex-end'
  },
  image: {
    width: 50,
    height: 60
  },
  removeButton: {
    marginTop: 20,
    marginRight: -10,
    marginBottom: -10
  }
});
