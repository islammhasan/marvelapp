import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';
import {strings} from '../../strings';
import Highlighter from 'react-native-highlight-words';

export const SearchCard = ({onPress, name, img, highlight}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.imgStyle}
        source={{uri: `${img}`} || images.placeholder}
      />
      <Highlighter
        numberOfLines={2}
        highlightStyle={{backgroundColor: colors.red}}
        searchWords={[highlight]}
        style={styles.txtStyle}
        textToHighlight={name || strings.characterName}
      />
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
