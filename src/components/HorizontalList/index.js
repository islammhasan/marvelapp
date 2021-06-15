import React from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {ComicsCard} from '../ComicsCard';

export const HorizontalList = props => {
  const {data, sectionTitle} = props;
  const renderItem = ({item}) => {
    const {title} = item;
    return (
      <ComicsCard
        onPress={() => alert(title)}
        img={
          item.thumbnail == null
            ? null
            : item?.thumbnail?.path + '.' + item?.thumbnail?.extension
        }
        title={title == null ? null : title}
      />
    );
  };

  const itemSeparator = () => {
    return <View style={styles.separatorStyle}></View>;
  };
  return (
    <>
      <Text style={styles.titleStyle}>{sectionTitle}</Text>
      <FlatList
        data={data}
        horizontal
        ItemSeparatorComponent={itemSeparator}
        contentContainerStyle={styles.listStyle}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onEndReachedThreshold={0}
        {...props}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: moderateScale(16),
    color: colors.lightred,
    marginTop: verticalScale(25),
    marginHorizontal: scale(20),
  },
  listStyle: {
    paddingStart: scale(20),
    marginTop: verticalScale(15),
  },
  separatorStyle: {
    width: scale(10),
  },
});
