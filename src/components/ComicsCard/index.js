import React from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {strings} from '../../strings';

export const ComicsCard = ({img, title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.container}>
      <Image style={styles.imgStyle} source={img || images.placeholder} />
      <Text numberOfLines={2} style={styles.titleStyle}>
        {title || strings.comicTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(100),
    height: verticalScale(180),
    alignItems: 'center',
  },
  imgStyle: {
    width: scale(100),
    height: verticalScale(140),
    borderRadius: moderateScale(10),
  },
  titleStyle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: moderateScale(12),
    marginTop: verticalScale(10),
    paddingHorizontal: scale(10),
  },
});