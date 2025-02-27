import React from 'react';
import { View, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './DatosScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#184666" barStyle="light-content" />
            <View style={styles.dataView}>
                
            </View>
            <View style={styles.bodyView}>
                
            </View>
        </View>
    );
}
