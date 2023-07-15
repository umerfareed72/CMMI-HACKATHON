import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import styles from './styles';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation?.replace('Drawer');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.textStyle}>Construction Machine Management Inc</Text>
    </SafeAreaView>
  );
};

export default Splash;
