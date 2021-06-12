import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, CharacterDetails, Search} from '../screens/';
import {navigationOptions} from './navigationOptions';

const Stack = createStackNavigator();

export const NavStack = () => {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
    </Stack.Navigator>
  );
};
