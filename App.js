import React, {useEffect} from 'react';
import {NavContainer} from './src/navigation';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return <NavContainer />;
};

export default App;
