import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const LoadingIndicator = props => {
  const {size, color, style} = props;
  return (
    <ActivityIndicator
      size={size || 'large'}
      color={color || colors.red}
      style={[styles.loaderStyle, style]}
    />
  );
};

const styles = StyleSheet.create({
  loaderStyle: {
    marginTop: verticalScale(10),
  },
});
