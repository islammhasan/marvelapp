import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const Container = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
