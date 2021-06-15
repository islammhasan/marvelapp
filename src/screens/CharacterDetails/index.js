import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import {
  BackButton,
  ComicsCard,
  Container,
  LoadingIndicator,
} from '../../components';
import {strings} from '../../strings';
import {styles} from './styles';

export const CharacterDetails = ({navigation, route}) => {
  const {id, name, img, description} = route.params;
  const [comicsList, setComicsList] = useState([]);
  const [eventsList, setEventsList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);
  const [storiesList, setStoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [comicsLimit, setComicsLimit] = useState(4);
  const [eventsLimit, setEventsLimit] = useState(4);
  const [seriesLimit, setSeriesLimit] = useState(4);
  const [storiesLimit, setStoriesLimit] = useState(4);

  useEffect(() => {
    setIsLoading(true);
    fetchComics();
    fetchEvents();
    fetchSeries();
    fetchStoires();
  }, [comicsLimit || eventsLimit || seriesLimit || storiesLimit]);

  const fetchComics = async () => {
    try {
      const hash = 'ea5b40862f00541b17718c8026ea6743';
      const publicKey = '78bc643001f53e9f0a393a71b14f2c00';
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}/comics`,
        {
          params: {
            ts: 1,
            apikey: publicKey,
            hash: hash,
            limit: comicsLimit,
          },
        },
      );
      setComicsList(response.data?.data?.results);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
    }
  };

  const fetchEvents = async () => {
    try {
      const hash = 'ea5b40862f00541b17718c8026ea6743';
      const publicKey = '78bc643001f53e9f0a393a71b14f2c00';
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}/events`,
        {
          params: {
            ts: 1,
            apikey: publicKey,
            hash: hash,
            limit: eventsLimit,
          },
        },
      );
      setEventsList(response.data?.data?.results);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
    }
  };

  const fetchSeries = async () => {
    try {
      const hash = 'ea5b40862f00541b17718c8026ea6743';
      const publicKey = '78bc643001f53e9f0a393a71b14f2c00';
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}/series`,
        {
          params: {
            ts: 1,
            apikey: publicKey,
            hash: hash,
            limit: seriesLimit,
          },
        },
      );
      setSeriesList(response.data?.data?.results);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
    }
  };

  const fetchStoires = async () => {
    try {
      const hash = 'ea5b40862f00541b17718c8026ea6743';
      const publicKey = '78bc643001f53e9f0a393a71b14f2c00';
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}/stories`,
        {
          params: {
            ts: 1,
            apikey: publicKey,
            hash: hash,
            limit: storiesLimit,
          },
        },
      );
      setStoriesList(response.data?.data?.results);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
    }
  };

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
    return <View style={styles.comicSeparatorStyle}></View>;
  };
  return (
    <Container statusBarTranslucent statusBarColor="transparent">
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
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}>
        <Text numberOfLines={2} style={styles.charNameStyle}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.descTitleStyle}>
          {strings.descTitle}
        </Text>
        <Text style={styles.descStyle}>
          {description ? description : 'No description'}
        </Text>
        {isLoading && <LoadingIndicator style={styles.loaderStyle} />}
        {comicsList.length > 0 && (
          <>
            <Text style={styles.descTitleStyle}>{strings.comics}</Text>
            <FlatList
              data={comicsList}
              horizontal
              ItemSeparatorComponent={itemSeparator}
              contentContainerStyle={styles.comicsListStyle}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              onEndReached={() => setComicsLimit(comicsLimit + 4)}
              onEndReachedThreshold={0}
            />
          </>
        )}
        {eventsList.length > 0 && (
          <>
            <Text style={styles.descTitleStyle}>{strings.events}</Text>
            <FlatList
              data={eventsList}
              horizontal
              ItemSeparatorComponent={itemSeparator}
              contentContainerStyle={styles.comicsListStyle}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              onEndReached={() => setEventsLimit(eventsLimit + 4)}
              onEndReachedThreshold={0}
            />
          </>
        )}
        {seriesList.length > 0 && (
          <>
            <Text style={styles.descTitleStyle}>{strings.series}</Text>
            <FlatList
              data={seriesList}
              horizontal
              ItemSeparatorComponent={itemSeparator}
              contentContainerStyle={styles.comicsListStyle}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              onEndReached={() => setSeriesLimit(seriesLimit + 4)}
              onEndReachedThreshold={0}
            />
          </>
        )}
        {storiesList.length > 0 && (
          <>
            <Text style={styles.descTitleStyle}>{strings.stories}</Text>
            <FlatList
              data={storiesList}
              horizontal
              ItemSeparatorComponent={itemSeparator}
              contentContainerStyle={styles.comicsListStyle}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              onEndReached={() => setStoriesLimit(storiesLimit + 4)}
              onEndReachedThreshold={0}
            />
          </>
        )}
      </ScrollView>
    </Container>
  );
};
