import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './LoginStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Login" component={HomeStackNavigator} />
                <Tab.Screen name="Settings" component={SettingsStackNavigator} />
                <Tab.Screen name="Profile" component={ProfileStackNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
