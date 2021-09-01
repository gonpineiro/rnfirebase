import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    width: DEVICE_WIDTH - 50,
  },
});

export default styles;
