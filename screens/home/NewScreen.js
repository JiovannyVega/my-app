import React from 'react';
import { View, Text } from 'react-native';
import styles from './homeStyles';

export default function NewScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>New Screen</Text>
        </View>
    );
}
