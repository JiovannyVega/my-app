import React from 'react';
import { View, Text } from 'react-native';
import styles from './profileStyles';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
        </View>
    );
}
