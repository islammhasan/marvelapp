import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {strings} from '../../strings';

export const SearchCard = ({onPress, charName, img}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.imgStyle}
        source={img || images.placeholder}
      />
      <Text numberOfLines={2} style={styles.txtStyle}>
        {charName || strings.characterName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(70),
    width: scale(320),
    backgroundColor: 'white',
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: colors.charcard,
    paddingEnd: scale(20),
  },
  imgStyle: {
    width: scale(70),
    height: verticalScale(70),
  },
  txtStyle: {
    color: colors.white,
    fontSize: moderateScale(18),
    marginStart: scale(20),
    fontWeight: '700',
    flex: 1,
  },
});
