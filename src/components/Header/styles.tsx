import { StyleSheet } from 'react-native';

import { IS_ANDROIRD } from '../../utils/constants';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: IS_ANDROIRD ? 50 : 40,
    color: 'white',
  },
  sideButtonContainer: {
    height: 40,
    width: 40,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
  },
});

export default styles;
