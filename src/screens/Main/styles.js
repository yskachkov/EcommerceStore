import { StyleSheet } from 'react-native';

const text = {
  padding: 20,
  textAlign: 'center',
  fontSize: 18,
  color: '#000000'
};

export default StyleSheet.create({
  text,
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  userMessage: {
    ...text,
    padding: 30,
    marginBottom: 100,
    backgroundColor: '#E5E5E5'
  }
});
