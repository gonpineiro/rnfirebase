import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    display: 'flex',
    width: '80%',
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: colors.mainOrange,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 50,
    width: '100%',
  },
  input: {
    padding: 10,
    fontFamily: 'Raleway Regular',
  },
});

export default styles;
