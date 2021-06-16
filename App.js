import React, {useEffect} from 'react';
import {NavContainer} from './src/navigation';
import RNBootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  );
};

export default App;
