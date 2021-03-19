import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
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
  font-size: 16px;
  color: #333;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  background: #eee;
  border-radius: 4px;
`;

export const DatePickerButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const DetailsButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  padding: 8px 12px;
`;
