import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  row: {
    flexDirection: 'row',
  },
  user: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    justifyContent: 'center',
    marginRight: 10,
  },
  txtBy: {
    color: colors.grey,
    textAlign: 'right',
  },
  txtName: {
    color: colors.black,
    textAlign: 'right',
  },
  banner: {
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDoctor: {
    fontSize: 18,
    color: colors.white,
    marginBottom: 20,
    fontWeight: '500',
  },
  txtTeeth: {
    color: colors.white,
  },
});

export default styles;
