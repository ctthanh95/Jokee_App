import React from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../constants';

import styles from './styles';

const User = () => {
  return (
    <View style={[styles.user, styles.row]}>
      <Image source={images.logo} style={styles.logo} />
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.txtBy}>Handicrafted by</Text>
          <Text style={styles.txtName}>Jim HLS</Text>
        </View>
        <Image source={images.avatar} style={styles.avatar} />
      </View>
    </View>
  );
};

export default User;
