import React from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {ComicsCard} from '../ComicsCard';
import {LoadingIndicator} from '../LoadingIndicator';

export const HorizontalList = props => {
  const {data, sectionTitle, listLoading} = props;
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
      <View style={styles.titleContainerStyle}>
        <Text style={styles.titleStyle}>{sectionTitle}</Text>
        {listLoading && (
          <LoadingIndicator style={styles.indicatorStyle} size={'small'} />
        )}
      </View>
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
  titleContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(25),
  },
  titleStyle: {
    fontSize: moderateScale(16),
    color: colors.lightred,
    marginHorizontal: scale(20),
  },
  indicatorStyle: {
    marginTop: 0,
  },
  listStyle: {
    paddingStart: scale(20),
    marginTop: verticalScale(15),
  },
  separatorStyle: {
    width: scale(10),
  },
});
