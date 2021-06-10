import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export const Container = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
