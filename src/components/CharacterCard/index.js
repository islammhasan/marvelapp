import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {strings} from '../../strings';
import {images} from '../../assets/images';

export const CharacterCard = ({charName, onPress, img}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.container}>
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
    backgroundColor: colors.gray,
    opacity: 0.8,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
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
