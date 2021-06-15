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
  const [comicsListLoading, setComicsListLoading] = useState(false);
  const [eventsListLoading, setEventsListLoading] = useState(false);
  const [seriesListLoading, setSeriesListLoading] = useState(false);
  const [storiesListLoading, setStoriesListLoading] = useState(false);

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
      setComicsListLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
      setComicsListLoading(false);
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
      setEventsListLoading(false);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
      setEventsListLoading(false);
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
      setSeriesListLoading(false);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
      setSeriesListLoading(false);
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
      setStoriesListLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
      setStoriesListLoading(false);
      setStoriesList([]);
    }
  };

  const updateListLimit = (comics, events, series, stories) => {
    if (comics & (comicsList.length > 3)) {
      setComicsListLoading(true);
      setComicsLimit(comicsLimit + 4);
    } else if (events & (eventsList.length > 3)) {
      setEventsListLoading(true);
      setEventsLimit(eventsLimit + 4);
    } else if (series & (seriesList.length > 3)) {
      setSeriesListLoading(true);
      setSeriesLimit(seriesLimit + 4);
    } else if (stories & (storiesList.length > 3)) {
      setStoriesListLoading(true);
      setStoriesLimit(storiesLimit + 4);
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
            listLoading={comicsListLoading}
            onEndReached={() => updateListLimit(true, false, false, false)}
          />
        )}
        {eventsList.length > 0 && (
          <HorizontalList
            sectionTitle={strings.events}
            data={eventsList}
            listLoading={eventsListLoading}
            onEndReached={() => updateListLimit(false, true, false, false)}
          />
        )}
        {seriesList.length > 0 && (
          <HorizontalList
            sectionTitle={strings.series}
            data={seriesList}
            listLoading={seriesListLoading}
            onEndReached={() => updateListLimit(false, false, true, false)}
          />
        )}
        {storiesList.length > 0 && (
          <HorizontalList
            sectionTitle={strings.stories}
            data={storiesList}
            listLoading={storiesListLoading}
            onEndReached={() => updateListLimit(false, false, false, true)}
          />
        )}
      </ScrollView>
    </Container>
  );
};
