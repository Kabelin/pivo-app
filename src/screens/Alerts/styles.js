import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #bbb;
  text-align: center;
  margin-bottom: 20px;
`;

export const AlertsContainer = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const AlertCell = styled.View`
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

export const AlertTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #666;
  margin-bottom: 10px;
`;

export const AlertDetail = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: justify;
  margin-bottom: 5px;
`;

export const AlertDate = styled.Text`
  font-size: 16px;
  color: #666;
  flex: 1;
  text-align: right;
`;
