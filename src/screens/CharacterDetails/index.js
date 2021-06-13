import React from 'react';
import {View, Text, Image, FlatList, ScrollView, StatusBar} from 'react-native';
import {images} from '../../assets/images';
import {BackButton, ComicsCard, Container} from '../../components';
import {strings} from '../../strings';
import {styles} from './styles';

export const CharacterDetails = ({navigation, route}) => {
  const {id, name, img, description} = route.params;
  const renderItem = ({item}) => {
    return (
      <ComicsCard
        onPress={() => alert(item.title)}
        img={item.image}
        title={item.title}
      />
    );
  };
  const itemSeparator = () => {
    return <View style={styles.comicSeparatorStyle}></View>;
  };
  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imgContainer}>
          <Image
            resizeMode="cover"
            style={styles.imgStyle}
            source={{uri: `${img}`}}
          />
          <BackButton
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          />
        </View>
        <Text numberOfLines={2} style={styles.charNameStyle}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.descTitleStyle}>
          {strings.descTitle}
        </Text>
        <Text style={styles.descStyle}>
          {description ? description : 'No description'}
        </Text>
        <Text style={styles.descTitleStyle}>{strings.comics}</Text>
        <FlatList
          data={DATA}
          horizontal
          ItemSeparatorComponent={itemSeparator}
          contentContainerStyle={styles.comicsListStyle}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
        <Text style={styles.descTitleStyle}>{strings.events}</Text>
        <FlatList
          data={DATA}
          horizontal
          ItemSeparatorComponent={itemSeparator}
          contentContainerStyle={styles.comicsListStyle}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
        <Text style={styles.descTitleStyle}>{strings.series}</Text>
        <FlatList
          data={DATA}
          horizontal
          ItemSeparatorComponent={itemSeparator}
          contentContainerStyle={styles.comicsListStyle}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
        <Text style={styles.descTitleStyle}>{strings.stories}</Text>
        <FlatList
          data={DATA}
          horizontal
          ItemSeparatorComponent={itemSeparator}
          contentContainerStyle={styles.comicsListStyle}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </ScrollView>
    </Container>
  );
};

const DATA = [
  {
    id: '12b689',
    title: '3-D Man',
    image: images.placeholder,
  },
  {
    id: '120e',
    title: 'A-Bomb (HAS)',
    image: images.background,
  },
  {
    id: '12d1',
    title: 'A.I.M',
    image: images.placeholder,
  },
  {
    id: '198y',
    title: 'Abomination',
    image: images.background,
  },
  {
    id: '19y2',
    title: 'Abomination',
    image: images.placeholder,
  },
];
