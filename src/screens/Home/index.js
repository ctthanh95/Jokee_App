import React from 'react';
import {Header, Body, Footer} from '../../components';
import {SafeAreaView} from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </SafeAreaView>
  );
};

export default Home;
