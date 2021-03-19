import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const SwitchHint = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  color: #7159c1;
`;

export const Progress = styled.Text`
  flex-direction: row;
  padding: 20px 0;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #7159c1;
`;

export const DetailsContainer = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const InfoColumn = styled.View`
  background: #f5f5f5;
  border-radius: 4px;
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
  color: #7159c1;
  margin-bottom: 2px;
`;

export const Hour = styled.Text`
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-bottom: 2px;
`;

export const Coordinates = styled.Text`
  flex: 1;
  font-size: 13px;
  color: #666;
`;
