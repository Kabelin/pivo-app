import React from 'react';
import {PieChart} from 'react-native-svg-charts';
import {View} from 'react-native';
import {
  Container,
  FuelIcon,
  FuelType,
  Info,
  InfoCell,
  Quantity,
  Title,
  FuelDate,
} from './styles';
import {Background} from '../../styles';

// const data = [
//   {
//     key: 'full',
//     value: 70,
//     svg: {fill: value > 30 ? '#54e346' : 'blue'},
//   },
//   {
//     key: 'empty',
//     value: 30,
//     svg: {fill: '#c4c4c4'},
//   },
// ];

const values = [70, 30];
// const values = [30, 70];
const keys = ['full', 'empty'];
const colors = ['#54e346', '#c4c4c4'];
const data = keys.map((key, index) => {
  return {
    key,
    value: values[index],
    svg: {
      fill: key === 'full' && values[index] <= 30 ? 'red' : colors[index],
    },
  };
});

const quantity = 67;

const fuelType = 'gasolina';

const date = new Date();

const Fuel = () => {
  return (
    <Background>
      <Container>
        <Title>Tanque do pivô</Title>
        <Quantity>Quantidade disponível: {quantity}%</Quantity>

        <View>
          <PieChart
            style={{height: 300, marginBottom: -100}}
            padAngle={0}
            startAngle={-Math.PI * 0.5}
            endAngle={Math.PI * 0.5}
            innerRadius="0%"
            data={data}
            sort={(a) => (a.key === 'empty' ? 1 : -1)}
          />
          <FuelIcon />
        </View>
        <InfoCell elevation={3}>
          <Info>
            <FuelType>Abastecido com {fuelType}</FuelType>
          </Info>
          <Info>
            <FuelDate>
              {`0${date.getDate()}`.slice(-2)}/{`0${date.getMonth()}`.slice(-2)}
              /{date.getFullYear()}, {`0${date.getHours()}`.slice(-2)}:
              {`0${date.getMinutes()}`.slice(-2)}
            </FuelDate>
          </Info>
        </InfoCell>
      </Container>
    </Background>
  );
};

export default Fuel;
