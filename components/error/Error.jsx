import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useGlobalError } from './GlobalErrorContext';

const ErrorScreen = () => {
    const { error, clearError } = useGlobalError();

    if (!error) return null;

    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorTitle}>Write Tag</Text>
            <Image source={require('./assets/error-image.png')} style={styles.errorImage} />
            <Text style={styles.errorMessage}>Error while reading NFC tag</Text>
            <Button title="Dismiss" onPress={clearError} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    errorTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    errorImage: {
        width: 100,
        height: 100,
        marginVertical: 20,
    },
    errorMessage: {
        fontSize: 18,
        color: 'red',
    },
});

export default ErrorScreen;
