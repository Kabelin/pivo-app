import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
  padding: 10px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const SwitchHint = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  color: #54e346;
`;

export const Progress = styled.Text`
  position: absolute;
  left: 43%;
  top: 15%;
  flex-direction: row;
  padding: 20px 0;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #54e346;
`;

export const DetailsContainer = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const InfoCell = styled.View`
  background: #f5f5f5;
  border-radius: 6px;
  padding: 10px 15px;
  margin-bottom: 20px;
  align-items: center;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const PassedProgress = styled.Text`
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  color: #54e346;
  margin-bottom: 2px;
`;

export const Hour = styled.Text`
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  color: #666;
  margin-bottom: 2px;
`;

export const Coordinates = styled.Text`
  flex: 1;
  font-size: 13px;
  color: #666;
`;
