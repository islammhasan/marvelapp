import React from 'react';
import {View} from 'react-native';
import {
  CharacterCard,
  ComicsCard,
  Container,
  SearchCard,
  SearchInput,
} from './src/components/';

const App = () => {
  return (
    <Container>
      <CharacterCard onPress={() => alert('character card!')} />
      <View style={{height: 30}}></View>
      <SearchCard onPress={() => alert('search card!')} />
      <View style={{height: 30}}></View>
      <SearchInput placeholder="Search for a character..." />
      <View style={{height: 30}}></View>
      <ComicsCard onPress={() => alert('comics card!')} />
    </Container>
  );
};

export default App;
