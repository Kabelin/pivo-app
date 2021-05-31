import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

const imageSource = require('../assets/background.png');

export const Background = styled(ImageBackground).attrs({
  source: imageSource,
})`
  flex: 1;
  flex-grow: 1;
  justify-content: center;
  padding: 30px;
`;
