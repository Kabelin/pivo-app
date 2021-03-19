import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import CodePush from 'react-native-code-push';

import './config/ReactotronConfig';
import Routes from './routes';

// import { Container } from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
