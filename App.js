import React from 'react';
import {View} from 'react-native';
import {
  CharacterCard,
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
      <SearchInput placeholder='Search for a character...' />
    </Container>
  );
};

export default App;
