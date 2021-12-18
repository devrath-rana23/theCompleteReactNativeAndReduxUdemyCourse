import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const BoxScreen = () => {

    return (
        <SafeAreaProvider>
            <View style={styles.viewStyle}>
                <View style={styles.boxOneStyle} />
                <View style={styles.boxTwoStyle} />
                <View style={styles.boxThreeStyle} />
            </View>
        </SafeAreaProvider>
    );

};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxOneStyle: {
        height: 110,
        width: 110,
        backgroundColor: '#f00',
    },
    boxTwoStyle: {
        position: 'absolute',
        height: 110,
        width: 110,
        backgroundColor: '#0f0',
        top:110,
        left:125,
    },
    boxThreeStyle: {
        height: 110,
        width: 110,
        backgroundColor: '#00f',
    },
});

export default BoxScreen;
