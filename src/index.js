import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import codePush from 'react-native-code-push';

import './config/ReactotronConfig';
import Routes from './routes';

// import { Container } from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#54E346" />
      <Routes />
    </>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);
