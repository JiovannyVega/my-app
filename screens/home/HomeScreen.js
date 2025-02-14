import React from 'react';
import { View, Text } from 'react-native';
import styles from './homeStyles';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}
