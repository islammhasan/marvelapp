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
import {useCharacter} from '../../redux/character';
import {useSelector} from 'react-redux';

export const CharacterDetails = ({navigation, route}) => {
  const {item, img} = route.params;
  const {id, name, description} = item;
  const [isLoading, setIsLoading] = useState(false);
  const [comicsLimit, setComicsLimit] = useState(4);
  const [eventsLimit, setEventsLimit] = useState(4);
  const [seriesLimit, setSeriesLimit] = useState(4);
  const [storiesLimit, setStoriesLimit] = useState(4);
  const {getComics, getEvents, getSeries, getStories} = useCharacter();
  const comicsLoading = useSelector(state => state.character.comicsLoading);
  const eventsLoading = useSelector(state => state.character.eventsLoading);
  const seriesLoading = useSelector(state => state.character.seriesLoading);
  const storiesLoading = useSelector(state => state.character.storiesLoading);
  const comicsList = useSelector(state => state.character.comicsList);
  const eventsList = useSelector(state => state.character.eventsList);
  const seriesList = useSelector(state => state.character.seriesList);
  const storiesList = useSelector(state => state.character.storiesList);

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
      await getComics(id, comicsLimit);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
    }
  };

  const fetchEvents = async () => {
    try {
      await getEvents(id, eventsLimit);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
    }
  };

  const fetchSeries = async () => {
    try {
      await getSeries(id, seriesLimit);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
    }
  };

  const fetchStoires = async () => {
    try {
      await getStories(id, storiesLimit);
      setIsLoading(false);
    } catch (err) {
      console.log('error==>', err);
      setIsLoading(false);
    }
  };

  const updateListLimit = ({comics, events, series, stories}) => {
    if (comics & (comicsList.length > 3)) {
      setComicsLimit(comicsLimit + 4);
    } else if (events & (eventsList.length > 3)) {
      setEventsLimit(eventsLimit + 4);
    } else if (series & (seriesList.length > 3)) {
      setSeriesLimit(seriesLimit + 4);
    } else if (stories & (storiesList.length > 3)) {
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
        <Text style={styles.descStyle}>{description || 'No description'}</Text>
        {comicsList.length > 0 && (
          <HorizontalList
            sectionTitle={strings.comics}
            data={comicsList}
            listLoading={comicsLoading}
            onEndReached={() => updateListLimit({comics: true})}
          />
        )}
        {eventsList.length > 0 && (
          <HorizontalList
            sectionTitle={strings.events}
            data={eventsList}
            listLoading={eventsLoading}
            onEndReached={() => updateListLimit({events: true})}
          />
        )}
        {seriesList.length > 0 && (
          <HorizontalList
            sectionTitle={strings.series}
            data={seriesList}
            listLoading={seriesLoading}
            onEndReached={() => updateListLimit({series: true})}
          />
        )}
        {storiesList.length > 0 && (
          <HorizontalList
            sectionTitle={strings.stories}
            data={storiesList}
            listLoading={storiesLoading}
            onEndReached={() => updateListLimit({stories: true})}
          />
        )}
        {isLoading && <LoadingIndicator style={styles.loaderStyle} />}
      </ScrollView>
    </Container>
  );
};
