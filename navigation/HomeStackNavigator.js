import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import NewScreen from '../screens/home/NewScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainHomeScreen" component={HomeScreen} />
            <Stack.Screen name="NewScreen" component={NewScreen} />
        </Stack.Navigator>
    );
}
