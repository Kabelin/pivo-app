import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {ImageBackground} from 'react-native';

const imageSource = require('../../../assets/background.png');

export const Container = styled.View`
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
  padding: 30px;
`;

export const Background = styled(ImageBackground).attrs({
  source: imageSource,
})`
  flex: 1;
  flex-grow: 1;
  justify-content: center;
  padding: 30px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
  margin-bottom: 20px;
`;

export const SelectedDate = styled.Text`
  flex: 1;
  height: 40px;
  padding: 0 15px;
  font-size: 18px;
  color: #666;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  background: #eee;
  border-radius: 6px;
`;

export const DatePickerButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #54e346;
  border-radius: 6px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const CustomButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #54e346;
  border-radius: 6px;
  padding: 8px 12px;
`;
