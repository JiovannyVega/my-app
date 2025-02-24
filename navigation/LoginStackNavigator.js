import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import DatosScreen from '../screens/datos/DatosScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="DatosScreen" component={DatosScreen} />
        </Stack.Navigator>
    );
}
