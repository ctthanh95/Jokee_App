import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingHorizontal: 15,
    paddingVertical: 50,
    justifyContent: 'space-between',
  },
  txtContent: {
    fontSize: 16,
    color: colors.grey,
    lineHeight: 22,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    padding: 10,
  },
  txtTitle: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
  },
  txtAll: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
