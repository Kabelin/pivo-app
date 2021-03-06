import React from 'react';
import {Switch} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';
import {
  Container,
  Progress,
  DetailsContainer,
  InfoCell,
  Info,
  PassedProgress,
  Hour,
  Coordinates,
  SwitchContainer,
  SwitchHint,
} from './styles';
import {Background} from '../../styles';

const Details = () => {
  const data = [
    {
      id: 1,
      longitude: -17.2234216,
      latitude: -46.8737419,
      progress: 10,
      date: new Date('2020-06-20T01:00:00'),
    },
    {
      id: 2,
      longitude: -19.2234216,
      latitude: -46.8737419,
      progress: 20,
      date: new Date('2020-06-20T02:00:00'),
    },
    {
      id: 3,
      longitude: -21.2234216,
      latitude: -46.8737419,
      progress: 35,
      date: new Date('2020-06-20T03:00:00'),
    },
    {
      id: 4,
      longitude: -25.2234216,
      latitude: -46.8737419,
      progress: 45,
      date: new Date('2020-06-20T04:00:00'),
    },
    {
      id: 5,
      longitude: -22.2234216,
      latitude: -55.8737419,
      progress: 55,
      date: new Date('2020-06-20T05:00:00'),
    },
    {
      id: 6,
      longitude: -20.2234216,
      latitude: -65.8737419,
      progress: 70,
      date: new Date('2020-06-20T06:00:00'),
    },
  ];

  return (
    <Background>
      <Container>
        <SwitchContainer>
          <SwitchHint>On</SwitchHint>
          <Switch value disabled thumbColor="#54E346" trackColor="#C4C4C4" />
        </SwitchContainer>
        <ProgressCircle
          style={{height: 200}}
          progress={0.7}
          strokeWidth={8}
          backgroundColor="#C4C4C4"
          progressColor="#54E346"
        />
        <Progress>70%</Progress>
        <DetailsContainer
          data={data}
          keyExtractor={(star) => String(star.id)}
          renderItem={({item}) => (
            <InfoCell elevation={3}>
              <Info>
                <PassedProgress>Progresso: {item.progress}%</PassedProgress>
                <Hour>
                  Horário: {`0${item.date.getHours()}`.slice(-2)}:
                  {`0${item.date.getMinutes()}`.slice(-2)}
                </Hour>
              </Info>
              <Info>
                <Coordinates>Latitude: {item.latitude}</Coordinates>
                <Coordinates>Longitude: {item.longitude}</Coordinates>
              </Info>
            </InfoCell>
          )}
        />
      </Container>
    </Background>
  );
};

export default Details;
