import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  /* flex: 1; */

  background: rgba(255, 255, 255, 0.7);
  padding: 10px;
  margin-bottom: auto;
`;

export const FuelIcon = styled(Icon).attrs({
  name: 'local-gas-station',
  size: 45,
  color: '#FF8303',
})`
  position: absolute;
  left: 45%;
  top: 50px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #bbb;
  text-align: center;
  margin-bottom: 40px;
`;

export const Quantity = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #54e346;
  text-align: center;
  margin-bottom: 40px;
`;

export const InfoCell = styled.View`
  background: #f5f5f5;
  border-radius: 6px;
  padding: 10px 15px;
  margin-bottom: 20px;
  align-items: center;
`;

export const Info = styled.View`
  flex-direction: row;
`;

export const FuelType = styled.Text`
  flex: 1;
  font-size: 20px;
  font-weight: bold;
  color: #666;
  margin-bottom: 5px;
`;

export const FuelDate = styled.Text`
  flex: 1;
  font-size: 17px;
  color: #666;
`;
