import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {icons} from '../../assets/icons';

export const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}>
      <Image style={styles.iconStyle} source={icons.back} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(60),
    height: verticalScale(35),
    backgroundColor: colors.gray,
    borderTopEndRadius: moderateScale(50),
    borderBottomEndRadius: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: scale(15),
    height: verticalScale(15),
    tintColor: colors.white,
    opacity: 0.8,
  },
});
