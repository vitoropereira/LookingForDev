
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ 
        gestureEnabled: false,
        headerTintColor: '#fff',
        headerStyle:{
          backgroundColor: '#7d40e7'
        }
       }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Loking for Dev' }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        initialParams={{ user: 'Perfil no Github' }}
      />
    </Stack.Navigator>
  );
}

export default Routes