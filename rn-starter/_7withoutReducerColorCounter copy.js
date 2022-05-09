import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

const SquareColorScreen = ({ color, onIncrease, onDecrease }) => {

    return (
        <View style={styles.colorActionContainer}>
            <Text style={styles.colorActionText}>{color}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onIncrease()}
            >
                <Text style={styles.buttonTitle}>More {color}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onDecrease()}
            >
                <Text style={styles.buttonTitle}>Less {color}</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    colorActionContainer: {
        marginBottom: 20,
    },
    colorActionText: {
        fontSize: 30,
    },
    button: {
        backgroundColor: '#46cce0',
        marginBottom: 20,
        marginLeft: 100,
        marginRight: 100,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
    },
    buttonTitle: {
        textAlign: 'center',
        fontSize: 17,
    },
});

export default SquareColorScreen;