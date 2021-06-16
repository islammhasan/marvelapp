import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, TouchableOpacity, Image, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {icons} from '../../assets/icons';
import {images} from '../../assets/images';
import {CharacterCard, Container, LoadingIndicator} from '../../components';
import {useMainFetch} from '../../redux/main';
import {styles} from './styles';

export const Home = ({navigation}) => {
  const [currentLimit, setCurrentLimit] = useState(10);
  const {getCharacters} = useMainFetch();
  const loading = useSelector(state => state.main.loading);
  const charList = useSelector(state => state.main.characters);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: headerlogo,
      headerTitleAlign: 'center',
      headerRight: headerSearchIcon,
    });
  }, [navigation]);

  useEffect(() => {
    fetchCharacter();
  }, [currentLimit]);

  const tryAgain = () => {
    fetchCharacter();
  };

  const fetchCharacter = async () => {
    try {
      await getCharacters(currentLimit);
    } catch (err) {
      console.log('error==>', err);
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
    const {name, thumbnail} = item;
    const {path, extension} = thumbnail;
    const img = `${path}.${extension}`;
    return (
      <CharacterCard
        onPress={() => navigation.navigate('CharacterDetails', {item, img})}
        {...{name, img}}
      />
    );
  };

  const itemSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };

  const footerLoader = () => {
    return loading && <LoadingIndicator />;
  };

  const loadMore = () => {
    setCurrentLimit(currentLimit + 10);
  };

  return (
    <Container statusBarTranslucent>
      <View style={styles.headerExtension}></View>
      {charList.length < 1 && loading == false ? (
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
