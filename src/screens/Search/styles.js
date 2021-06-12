import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    marginTop: verticalScale(20),
  },
  cancelContainerStyle: {
    flex: 1,
    height: verticalScale(30),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cancelTxtStyle: {
    color: colors.lightred,
    fontSize: moderateScale(16),
  },
  listStyle: {
    alignItems: 'center',
    paddingVertical: verticalScale(15),
  },
  itemSeparator: {
    height: verticalScale(15),
  },
});
