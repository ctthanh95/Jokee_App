import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.txtDoctor}>A joke a day keeps the doctor away</Text>
      <Text style={styles.txtTeeth}>
        If you joke wrong way, your teeth have to pay. (Serious)
      </Text>
    </View>
  );
};

export default Banner;
