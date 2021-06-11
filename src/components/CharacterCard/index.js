import React from 'react';
import {Image, Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {strings} from '../../strings';
import {images} from '../../assets/images';

export const CharacterCard = ({charName, onPress, img, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.container, style]}>
      <Image
        source={img || images.placeholder}
        resizeMode={'cover'}
        style={styles.imgStyle}
      />
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.titleStyle}>
          {charName || strings.characterName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(110),
    width: scale(320),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(320),
    height: verticalScale(30),
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  titleStyle: {
    color: colors.white,
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
  imgStyle: {
    height: verticalScale(120),
    width: scale(320),
  },
});
