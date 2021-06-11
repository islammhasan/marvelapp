import React from 'react';
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import {icons} from '../../assets/icons';
import {images} from '../../assets/images';
import {CharacterCard, Container} from '../../components';
import {styles} from './styles';

export const Home = () => {
  const renderItem = ({item}) => {
    return (
      <CharacterCard
        onPress={() => alert(item.title)}
        charName={item.title}
        img={item.image}
      />
    );
  };

  const itemSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };
  return (
    <Container>
      <View style={styles.headerContainerStyle}>
        <Image
          resizeMode="contain"
          style={styles.logoStyle}
          source={images.logo}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => alert('search!')}
          style={styles.searchIconContainer}>
          <Image
            resizeMode="contain"
            style={styles.searchIconStyle}
            source={icons.search}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparator}
        contentContainerStyle={styles.charListStyle}
        keyExtractor={item => item.id?.toString()}
        renderItem={renderItem}
      />
    </Container>
  );
};

const DATA = [
  {
    id: '311',
    title: '3-D Man',
    image: images.placeholder,
  },
  {
    id: '4124',
    title: 'A-Bomb (HAS)',
    image: images.placeholder,
  },
  {
    id: '121',
    title: 'A.I.M',
    image: images.placeholder,
  },
  {
    id: '511',
    title: 'Abomination',
    image: images.placeholder,
  },
  {
    id: '212',
    title: 'Abomination',
    image: images.placeholder,
  },
];
