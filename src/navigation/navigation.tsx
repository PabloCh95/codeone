import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import MovementsScreen from '../screen/MovementsScreen';

const Stack = createNativeStackNavigator();

export default function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{header:()=>null}}/>
        <Stack.Screen name="MovementsScreen" component={MovementsScreen} options={{header:()=>null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}