import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {colors} from '../../constants';
import styles from './styles';

const Button = ({isFunny, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: isFunny ? colors.blue : colors.green},
      ]}>
      <Text style={styles.txtTitle}>
        {isFunny ? 'This is Funny!' : 'This is not funny.'}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
