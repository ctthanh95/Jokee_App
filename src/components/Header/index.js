import React from 'react';
import {View} from 'react-native';
import Banner from './Banner';
import User from './User';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <User />
      <Banner />
    </View>
  );
};

export default Header;
