import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [curp, onChangeCURP] = React.useState('');
    const [email, onChangeEmail] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicia sesión</Text>
            <Text style={styles.subtitle}>Ingresa tus datos a continuación</Text>
            <TextInput
                style={styles.curpInput}
                onChangeText={onChangeCURP}
                value={curp}
                placeholder='Ingresa tu CURP'
                autoCapitalize='characters'
            />
            <TouchableHighlight
                onPress={() => {
                    // Ir a página de consulta tu CURP
                }}
            >
                <View style={styles.link}>
                    <Text style={styles.textBtn}>Consulta tu CURP</Text>
                </View>
            </TouchableHighlight>
            <TextInput
                style={styles.emailInput}
                onChangeText={onChangeEmail}
                value={email}
                placeholder='Ingresa tu correo electrónico'
                autoCapitalize='none'
                keyboardType='email-address'
            />
            <TouchableHighlight
                onPress={() => {
                    // Ingresar
                }}
            >
                <View style={styles.loginBtn}>
                    <Text style={styles.textBtn}>Ingresar</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}
