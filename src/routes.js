import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import Details from './pages/Details';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
