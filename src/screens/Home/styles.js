import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  headerContainerStyle: {
    flexDirection: 'row',
    width: '100%',
    height: verticalScale(90),
    backgroundColor: colors.gray,
    borderBottomStartRadius: moderateScale(25),
    borderBottomEndRadius: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: scale(150),
    height: verticalScale(80),
  },
  searchIconContainer: {
    width: scale(40),
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginEnd: scale(20),
    end: 0,
  },
  searchIconStyle: {
    tintColor: colors.red,
    width: scale(18),
    height: verticalScale(18),
  },
  charListStyle: {
    alignItems: 'center',
    paddingVertical: verticalScale(15),
  },
  itemSeparator: {
    height: verticalScale(15),
  },
});
