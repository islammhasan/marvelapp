import React from 'react';
import {View} from 'react-native';
import {CharacterCard, Container, SearchCard} from './src/components/';

const App = () => {
  return (
    <Container>
      <CharacterCard onPress={() => alert('character card!')} />
      <View style={{height: 30}}></View>
      <SearchCard onPress={() => alert('search card!')} />
    </Container>
  );
};

export default App;
