import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {
  BackButton,
  Container,
  HorizontalList,
  LoadingIndicator,
} from '../../components';
import {strings} from '../../strings';
import {styles} from './styles';
import {baseUrl, apikey, hash, ts} from '../../services/';

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
    initialFetch();
  }, []);

  useEffect(() => {
    fetchComics();
  }, [comicsLimit]);

  useEffect(() => {
    fetchEvents();
  }, [eventsLimit]);

  useEffect(() => {
    fetchSeries();
  }, [seriesLimit]);

  useEffect(() => {
    fetchStoires();
  }, [storiesLimit]);

  const initialFetch = async () => {
    setIsLoading(true);
    await fetchComics();
    await fetchEvents();
    await fetchSeries();
    await fetchStoires();
    setIsLoading(false);
  };

  const fetchComics = async () => {
    try {
      const response = await axios.get(`${baseUrl}/characters/${id}/comics`, {
        params: {
          ts,
          apikey,
          hash,
          limit: comicsLimit,
        },
      });
      setComicsList(response.data?.data?.results);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
      setComicsList([]);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/characters/${id}/events`, {
        params: {
          ts,
          apikey,
          hash,
          limit: eventsLimit,
        },
      });
      setEventsList(response.data?.data?.results);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
      setEventsList([]);
    }
  };

  const fetchSeries = async () => {
    try {
      const response = await axios.get(`${baseUrl}/characters/${id}/series`, {
        params: {
          ts,
          apikey,
          hash,
          limit: seriesLimit,
        },
      });
      setSeriesList(response.data?.data?.results);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
      setSeriesList([]);
    }
  };

  const fetchStoires = async () => {
    try {
      const response = await axios.get(`${baseUrl}/characters/${id}/stories`, {
        params: {
          ts,
          apikey,
          hash,
          limit: storiesLimit,
        },
      });
      setStoriesList(response.data?.data?.results);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
      setStoriesList([]);
    }
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
          <HorizontalList
            sectionTitle={strings.comics}
            data={comicsList}
            onEndReached={() => setComicsLimit(comicsLimit + 4)}
          />
        )}
        {eventsList.length > 0 && (
          <HorizontalList
            sectionTitle={strings.events}
            data={eventsList}
            onEndReached={() => setEventsLimit(eventsLimit + 4)}
          />
        )}
        {seriesList.length > 0 && (
          <HorizontalList
            sectionTitle={strings.series}
            data={seriesList}
            onEndReached={() => setSeriesLimit(seriesLimit + 4)}
          />
        )}
        {storiesList.length > 0 && (
          <HorizontalList
            sectionTitle={strings.stories}
            data={storiesList}
            onEndReached={() => setStoriesLimit(storiesLimit + 4)}
          />
        )}
      </ScrollView>
    </Container>
  );
};
