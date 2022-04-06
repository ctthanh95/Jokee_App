import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtDeclare}>
        This appis created as part of Hlsolutions program. The materials
        con-tained on this website are provided for general information only and
        do not constitute any form of adivce. HLS assumes no responsibility for
        the accuracy of any particular statement and accepts no liability for
        any loss or damage which may arise from reliance on the infor-mation
        contained on this site.
      </Text>
      <Text style={styles.txtCopy}>Copyright 2021 HLS</Text>
    </View>
  );
};

export default Footer;
