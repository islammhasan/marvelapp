import React, {useState} from 'react';
import {Text, FlatList, StyleSheet, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../../assets/colors';
import {ComicsCard, ImageZoomModal, LoadingIndicator} from '..';

export const HorizontalList = props => {
  const {data, sectionTitle, listLoading} = props;
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const renderItem = ({item}) => {
    const {title} = item;
    const image =
      item.thumbnail == null
        ? null
        : item?.thumbnail?.path + '.' + item?.thumbnail?.extension;
    return (
      <ComicsCard
        onPress={() => {
          setSelectedImg(image);
          setShowZoomModal(true);
        }}
        img={image}
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
        onEndReachedThreshold={0.7}
        {...props}
      />
      <ImageZoomModal
        isVisible={showZoomModal}
        onClose={() => setShowZoomModal(false)}
        img={selectedImg}
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
    paddingHorizontal: scale(20),
    marginTop: verticalScale(15),
  },
  separatorStyle: {
    width: scale(10),
  },
});
