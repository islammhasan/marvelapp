import axios from 'axios';
import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, TouchableOpacity, Image, FlatList, Text} from 'react-native';
import {icons} from '../../assets/icons';
import {images} from '../../assets/images';
import {CharacterCard, Container, LoadingIndicator} from '../../components';
import {styles} from './styles';

export const Home = ({navigation}) => {
  const [charList, setCharList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLimit, setCurrentLimit] = useState(10);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: headerlogo,
      headerTitleAlign: 'center',
      headerRight: headerSearchIcon,
    });
  }, [navigation]);

  useEffect(() => {
    setIsLoading(true);
    fetchCharacter();
  }, [currentLimit]);

  const tryAgain = () => {
    setIsLoading(true);
    fetchCharacter();
  };

  const fetchCharacter = async () => {
    try {
      const hash = 'ea5b40862f00541b17718c8026ea6743';
      const publicKey = '78bc643001f53e9f0a393a71b14f2c00';
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters`,
        {
          params: {
            ts: 1,
            apikey: publicKey,
            hash: hash,
            limit: currentLimit,
          },
        },
      );
      setCharList(response.data?.data?.results);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
    }
  };

  const headerlogo = () => {
    return (
      <Image
        resizeMode="contain"
        style={styles.logoStyle}
        source={images.logo}
      />
    );
  };

  const headerSearchIcon = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Search')}
        style={styles.searchIconContainer}>
        <Image
          resizeMode="contain"
          style={styles.searchIconStyle}
          source={icons.search}
        />
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => {
    const {id, name, description} = item;
    const {path, extension} = item.thumbnail;
    const img = `${path}.${extension}`;
    return (
      <CharacterCard
        onPress={() =>
          navigation.navigate('CharacterDetails', {
            id,
            name,
            img,
            description,
          })
        }
        charName={name}
        img={img}
      />
    );
  };

  const itemSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };

  const footerLoader = () => {
    return isLoading && <LoadingIndicator />;
  };

  const loadMore = () => {
    setCurrentLimit(currentLimit + 10);
    setIsLoading(true);
  };

  return (
    <Container statusBarTranslucent>
      <View style={styles.headerExtension}></View>
      {charList.length < 1 && isLoading == false ? (
        <>
          <Text style={styles.errorTxt}>Something went wrong!</Text>
          <TouchableOpacity style={styles.errorBtn} onPress={tryAgain}>
            <Text style={styles.errorBtnTxt}>Try Again</Text>
          </TouchableOpacity>
        </>
      ) : (
        <FlatList
          data={charList}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={itemSeparator}
          contentContainerStyle={styles.charListStyle}
          keyExtractor={item => item.id?.toString()}
          renderItem={renderItem}
          ListFooterComponent={footerLoader}
          onEndReached={loadMore}
          onEndReachedThreshold={0}
        />
      )}
    </Container>
  );
};
