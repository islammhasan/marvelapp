import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../assets/colors';
import {
  Container,
  LoadingIndicator,
  SearchCard,
  SearchInput,
} from '../../components';
import {useMainFetch, types} from '../../redux/main';
import {styles} from './styles';

export const Search = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [currentLimit, setCurrentLimit] = useState(10);
  const {searchCharacters} = useMainFetch();
  const loading = useSelector(state => state.main.searchLoading);
  const result = useSelector(state => state.main.searchList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchResults();
  }, [currentLimit, term]);

  const fetchResults = async () => {
    try {
      if (Boolean(term)) {
        await searchCharacters(currentLimit, term);
      } else {
        dispatch({type: types.GET_SEARCH_FAILED});
      }
    } catch (err) {
      console.log('error==>', err);
    }
  };

  const renderItem = ({item}) => {
    const {name, thumbnail} = item;
    const {path, extension} = thumbnail;
    const img = `${path}.${extension}`;
    return (
      <SearchCard
        onPress={() => navigation.navigate('CharacterDetails', {item, img})}
        highlight={term}
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
        onEndReached={() => {
          result.length > 9 && setCurrentLimit(currentLimit + 10);
        }}
        onEndReachedThreshold={0.7}
      />
    </Container>
  );
};
