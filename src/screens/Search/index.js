import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {images} from '../../assets/images';
import {Container, SearchCard, SearchInput} from '../../components';
import {styles} from './styles';

export const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

  const renderItem = ({item}) => {
    return <SearchCard highlight={term} img={item.img} charName={item.title} />;
  };

  const itemSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };

  const termChange = term => {
    if (term != '') {
      setTerm(term);
      const newRes = res.filter(item =>
        item.title.toLowerCase().includes(term.toLowerCase()),
      );
      setResult(newRes);
    } else {
      setTerm('');
      setResult([]);
    }
  };

  return (
    <Container>
      <View style={styles.searchContainer}>
        <SearchInput
          value={term}
          onChangeText={term => termChange(term)}
          placeholder="Search for a character..."
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => alert('go back!')}
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
      />
    </Container>
  );
};

const res = [
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
];
