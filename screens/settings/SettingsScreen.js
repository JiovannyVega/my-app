import React from 'react';
import { View, Text } from 'react-native';
import styles from './settingsStyles';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings Screen</Text>
        </View>
    );
}
