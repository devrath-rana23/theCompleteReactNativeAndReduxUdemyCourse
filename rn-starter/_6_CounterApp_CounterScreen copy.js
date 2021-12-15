import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const CounterScreen = () => {

    //In react native app if you instead of updating state variable simply updates a normal variable which is not a state, that update will not be highlighted even if it's value is updated which you can see by console.log(updated variable)

    let counter = 0;

    const [counterValue, setCounterValue] = useState(0);

    const incorrectChangeCounter = () => {
        counter++;
        console.log(counter);
    }

    const increaseCounter = () => {
        let reqCounterValue = counterValue;
        setCounterValue(++reqCounterValue);
    };

    const decreaseCounter = () => {
        let reqCounterValue = counterValue;
        if (reqCounterValue > 0) {
            setCounterValue(--reqCounterValue);
        }
    };

    return (
        <SafeAreaProvider>
            <View style={styles.body}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={incorrectChangeCounter}
                >
                    <Text style={styles.buttonTitle}>Incorrect Counter Change</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={increaseCounter}
                >
                    <Text style={styles.buttonTitle}>Increase</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={decreaseCounter}
                >
                    <Text style={styles.buttonTitle}>Decrease</Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>
                    Current Count:
                </Text>
                <Text style={styles.counterText}>
                    {counterValue}
                </Text>
                <Text style={styles.counterText}>
                    Incorrect Counter value : {counter}
                </Text>
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#46cce0',
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 10,
    },
    buttonTitle: {
        textAlign: 'center',
        fontSize: 25,
    },
    counterText: {
        fontSize: 30,
    }
});

export default CounterScreen;