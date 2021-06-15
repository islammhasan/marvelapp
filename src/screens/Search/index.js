import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {colors} from '../../assets/colors';
import {
  Container,
  LoadingIndicator,
  SearchCard,
  SearchInput,
} from '../../components';
import {styles} from './styles';
import {baseUrl, apikey, hash, ts} from '../../services';

export const Search = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLimit, setCurrentLimit] = useState(10);

  useEffect(() => {
    fetchResults();
  }, [currentLimit, term]);

  const fetchResults = async () => {
    try {
      if (Boolean(term)) {
        setIsLoading(true);
        const response = await axios.get(`${baseUrl}/characters`, {
          params: {
            ts,
            apikey,
            hash,
            limit: currentLimit,
            nameStartsWith: term,
          },
        });
        setResult(response.data?.data?.results);
        setIsLoading(false);
      } else {
        setResult([]);
        setIsLoading(false);
      }
    } catch (err) {
      console.log('error==>', err);
    }
  };

  const renderItem = ({item}) => {
    const {id, name, description} = item;
    const {path, extension} = item.thumbnail;
    const img = `${path}.${extension}`;
    return (
      <SearchCard
        onPress={() =>
          navigation.navigate('CharacterDetails', {id, name, description, img})
        }
        highlight={term}
        img={img}
        charName={name}
      />
    );
  };

  const itemSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };

  const footerLoader = () => {
    return isLoading && <LoadingIndicator />;
  };

  return (
    <Container statusBarColor={colors.black}>
      <View style={styles.searchContainer}>
        <SearchInput
          value={term}
          onChangeText={term => setTerm(term)}
          placeholder="Search for a character..."
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.cancelContainerStyle}>
          <Text style={styles.cancelTxtStyle}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={result}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listStyle}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
        ListFooterComponent={footerLoader}
        onEndReached={() => setCurrentLimit(currentLimit + 10)}
        onEndReachedThreshold={0}
      />
    </Container>
  );
};
