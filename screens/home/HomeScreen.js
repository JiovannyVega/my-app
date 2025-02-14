import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './homeStyles';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <View>
                <Button title="Click Me" onPress={() => navigation.navigate('NewScreen')} />
            </View>
        </View>
    );
}
