import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  scrollViewStyle: {
    paddingBottom: verticalScale(20),
  },
  imgContainer: {
    width: '100%',
    height: verticalScale(250),
    backgroundColor: colors.gray,
    borderBottomEndRadius: moderateScale(20),
    borderBottomStartRadius: moderateScale(20),
    overflow: 'hidden',
  },
  imgStyle: {
    width: '100%',
    height: verticalScale(250),
  },
  backBtn: {
    position: 'absolute',
    top: verticalScale(40),
  },
  charNameStyle: {
    fontSize: moderateScale(25),
    fontWeight: '700',
    color: colors.white,
    marginTop: verticalScale(25),
    marginHorizontal: scale(20),
  },
  descTitleStyle: {
    fontSize: moderateScale(16),
    color: colors.lightred,
    marginTop: verticalScale(25),
    marginHorizontal: scale(20),
  },
  descStyle: {
    fontSize: moderateScale(16),
    color: colors.white,
    marginTop: verticalScale(5),
    marginHorizontal: scale(20),
  },
  comicsListStyle: {
    paddingStart: scale(20),
    marginTop: verticalScale(15),
  },
  comicSeparatorStyle: {
    width: scale(10),
  },
  loaderStyle: {
    marginTop: verticalScale(50),
  },
});
