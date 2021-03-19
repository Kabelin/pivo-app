import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import MapView, {Polygon, Marker, Callout} from 'react-native-maps';

import {
  Container,
  DatePickerButton,
  DateContainer,
  SelectedDate,
  DetailsButton,
} from './styles';

const Main = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const coordinates = [
    {
      name: '1',
      latitude: -17.2234216,
      longitude: -46.8737419,
    },
    {
      name: '2',
      latitude: -17.2281765,
      longitude: -46.8654592,
    },
    {
      name: '3',
      latitude: -17.2361694,
      longitude: -46.8673904,
    },
    {
      name: '4',
      latitude: -17.2365383,
      longitude: -46.872669,
    },
    {
      name: '5',
      latitude: -17.230267,
      longitude: -46.8744714,
    },
  ];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <Container>
      <DateContainer>
        <SelectedDate>
          {`0${date.getDate()}`.slice(-2)}-{`0${date.getMonth()}`.slice(-2)}-
          {date.getFullYear()}
        </SelectedDate>
        <DatePickerButton
          onPress={() => {
            setShow(true);
          }}>
          <Icon name="today" size={25} color="#FFF" />
        </DatePickerButton>
      </DateContainer>
      <MapView
        style={{flex: 1, marginBottom: 20}}
        initialRegion={{
          latitude: -17.2282995,
          longitude: -46.8689353,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}>
        <Marker coordinate={{latitude: -17.2234216, longitude: -46.8737419}}>
          <Callout>
            <Text>Um exemplo de possível log</Text>
          </Callout>
        </Marker>
        <Polygon coordinates={coordinates} fillColor="rgba(113,89,193,0.4)" />
      </MapView>

      <DetailsButton
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Ver Detalhes
        </Text>
      </DetailsButton>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          locale="pt-BR"
          onChange={onChange}
        />
      )}
    </Container>
  );
};

export default Main;
