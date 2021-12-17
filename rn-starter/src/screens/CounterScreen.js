import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
    //state==={counter:0}
    //action==={type:'increment'||'decrement', payload:1}

    console.log(action);
    switch (action.type) {

        case 'increment':
            return state.counter + action.payload < 0
                ?
                state
                :
                { ...state, counter: state.counter + action.payload };

        case 'decrement':
            return state.counter - action.payload < 0
                ?
                state
                :
                { ...state, counter: state.counter - action.payload };

        default:
            return state;

    }

};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    console.log(state);

    return (
        <SafeAreaProvider>
            <View style={styles.body}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => dispatch({ type: 'increment', payload: COUNTER_INCREMENT })}
                >
                    <Text style={styles.buttonTitle}>Increase</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => dispatch({ type: 'decrement', payload: COUNTER_INCREMENT })}
                >
                    <Text style={styles.buttonTitle}>Decrease</Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>
                    Current Count:
                </Text>
                <Text style={styles.counterText}>
                    {state.counter}
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