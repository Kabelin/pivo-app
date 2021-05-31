import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PropTypes from 'prop-types';

import Monitoring from './screens/Main';
import Details from './screens/Details';
import ActivationModal from './screens/ActivationModal';
import Fuel from './screens/Fuel';
import Alerts from './screens/Alerts';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    text: 'white',
    card: '#54E346',
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {height: '8%'},
        tabStyle: {paddingBottom: 5, paddingTop: 5},
        labelStyle: {fontSize: 14},
      }}>
      <Tab.Screen
        options={{
          title: 'Monitoramento',
          tabBarIcon: ({color, size}) => (
            <Icon name="place" color={color} size={size} />
          ),
        }}
        name="Monitoring"
        component={Monitoring}
      />
      <Tab.Screen
        options={{
          title: 'Combustível',
          tabBarIcon: ({color, size}) => (
            <Icon name="local-gas-station" color={color} size={size} />
          ),
        }}
        name="Fuel"
        component={Fuel}
      />
      <Tab.Screen
        options={{
          title: 'Alertas',
          tabBarIcon: ({color, size}) => (
            <Icon name="warning" color={color} size={size} />
          ),
        }}
        name="Alerts"
        component={Alerts}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeTabs}
      />
      <Stack.Screen
        options={{title: 'Detalhes do pivô'}}
        name="Details"
        component={Details}
      />
      <Stack.Screen
        options={{title: 'Ativação remota'}}
        name="ActivationModal"
        component={ActivationModal}
      />
    </Stack.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer theme={Theme}>
      <App />
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#7159c1'},
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'Fazenda exemplo'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'Detalhes do pivô'}}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

HomeTabs.defaultProps = {
  color: '#fff',
  size: 16,
};

HomeTabs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Routes;
