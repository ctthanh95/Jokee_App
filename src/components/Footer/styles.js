import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  txtDeclare: {
    textAlign: 'center',
    marginBottom: 15,
    color: colors.grey,
  },
  txtCopy: {
    color: colors.maroon,
    fontSize: 16,
  },
});

export default styles;
