import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {icons} from '../../assets/icons';

export const SearchInput = props => {
  const {inputCustomStyle} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.searchIconStyle} source={icons.search} />
      <TextInput
        placeholderTextColor={colors.white}
        {...props}
        style={[styles.textInputStyle, inputCustomStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(60),
    width: scale(260),
    borderRadius: moderateScale(20),
    paddingHorizontal: scale(15),
    borderColor: colors.searchbar,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: scale(0),
      height: verticalScale(0),
    },
    shadowOpacity: 0.5,
    shadowRadius: moderateScale(10),
    elevation: 3,
  },
  textInputStyle: {
    fontSize: moderateScale(14),
    color: colors.white,
    flex: 1,
  },
  searchIconStyle: {
    width: scale(18),
    height: verticalScale(18),
    tintColor: colors.white,
    marginEnd: scale(10),
  },
});
