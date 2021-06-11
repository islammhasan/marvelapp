import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {strings} from '../../strings';
import {images} from '../../assets/images';
import {BlurView} from '@react-native-community/blur';

export const CharacterCard = ({charName, onPress, img}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        style={styles.container}>
        <Image
          source={img || images.placeholder}
          resizeMode={'cover'}
          style={styles.imgStyle}
        />
        <BlurView
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
          style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.titleStyle}>
            {charName || strings.characterName}
          </Text>
        </BlurView>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(120),
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
    maxHeight: verticalScale(30),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.4)',
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
