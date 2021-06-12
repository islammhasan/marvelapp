import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavStack} from './NavStack';

export const NavContainer = () => {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
};
