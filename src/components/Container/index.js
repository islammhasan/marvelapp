import React from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import {colors} from '../../assets/colors';

export const Container = props => {
  const {children, style, statusBarTranslucent, statusBarColor, barStyle} =
    props;
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar
        translucent={statusBarTranslucent || false}
        backgroundColor={statusBarColor || colors.gray}
        barStyle={barStyle || 'light-content'}
      />
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
