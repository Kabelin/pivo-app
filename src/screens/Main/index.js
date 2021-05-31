import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, Platform, ActivityIndicator} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';

import MapView, {Marker, Callout, Circle, Polyline} from 'react-native-maps';

import {
  Container,
  DatePickerButton,
  DateContainer,
  SelectedDate,
  CustomButton,
  // Background,
} from './styles';

import {Background} from '../../styles';

const Monitoring = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activationStatus, setActivationStatus] = useState(
    'Ativar remotamente',
  );

  const centerCoordinates = {
    latitude: -17.1761405,
    longitude: -46.815021,
  };

  // const coordinates = [
  //   {
  //     name: '1',
  //     latitude: -17.2234216,
  //     longitude: -46.8737419,
  //   },
  //   {
  //     name: '2',
  //     latitude: -17.2281765,
  //     longitude: -46.8654592,
  //   },
  //   {
  //     name: '3',
  //     latitude: -17.2361694,
  //     longitude: -46.8673904,
  //   },
  //   {
  //     name: '4',
  //     latitude: -17.2365383,
  //     longitude: -46.872669,
  //   },
  //   {
  //     name: '5',
  //     latitude: -17.230267,
  //     longitude: -46.8744714,
  //   },
  // ];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const remoteActivation = () => {
    setLoading(true);
    setTimeout(() => {
      if (activationStatus === 'Ativar remotamente')
        setActivationStatus('Desativar remotamente');
      else setActivationStatus('Ativar remotamente');
      setLoading(false);
    }, 5000);
  };

  return (
    <Background>
      <Container>
        <DateContainer>
          <SelectedDate>
            {`0${date.getDate()}`.slice(-2)}/{`0${date.getMonth()}`.slice(-2)}/
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
          style={{
            flex: 1,
            marginBottom: 20,
          }}
          initialRegion={{
            latitude: -17.1761405,
            longitude: -46.815021,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}>
          <Marker image={{uri: 'pivot'}} coordinate={centerCoordinates}>
            <Callout>
              <Text>Pivô central 1</Text>
            </Callout>
          </Marker>
          <Circle
            center={{
              latitude: -17.1761405,
              longitude: -46.815021,
            }}
            radius={800}
            fillColor="rgba(41,120,181,0.3)"
            strokeColor="#2978B5"
          />
          <Polyline
            strokeWidth={5}
            strokeColor="#54e346"
            coordinates={[
              {latitude: -17.1761405, longitude: -46.822421},
              centerCoordinates,
            ]}
          />
          {/* <Polygon coordinates={coordinates} fillColor="rgba(113,89,193,0.4)" /> */}
        </MapView>

        <CustomButton
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
        </CustomButton>
        <CustomButton
          onPress={() => remoteActivation()}
          style={{marginTop: 10}}>
          {loading ? (
            <ActivityIndicator size={21} color="white" />
          ) : (
            <Text
              style={{
                color: '#FFF',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {activationStatus}
            </Text>
          )}
        </CustomButton>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            locale="pt-BR"
            onChange={onChange}
          />
        )}
      </Container>
    </Background>
  );
};

Monitoring.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Monitoring;
