import React, { useState } from 'react';//useState is a hook i.e. a function that adds some new functionality to a function component.
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const CounterScreen = () => {

    //In react native app if you instead of updating state variable simply updates a normal variable which is not a state, that update will not be highlighted even if it's value is updated which you can see by console.log(updated variable)

    /* const [counterValue, setCounterValue] is referred to as array destructuring. Another way of pulling or referencing some elements out of the array.

    Eg:
    const colors = ['red','green'];

    Two ways to access colors array values=>
    
    WAY ONE
    colors[0];
    colors[1];
    
    WAY TWO
    const ['colorOne', 'colorTwo'] = colors;

    So we want JS to take first value of colors array and assign it to colorOne variable
    and take second value of colors array and assign it to colorTwo variable

    colorOne// O/P=>red
    colorTwo// O/P=>green

    This syntax helps us to assign whatever useState is returning to us simpler

    NOTE: Every copy or instance of a component used inside this functional component will have it's own pieces of state
    */

    const [counterValue, setCounterValue] = useState(0);//To change state variable we use second thing that comes to us when we call useState() => setCounterValue function. Whenever this functio is called react-native automatically reruns the function component we have created.

    const increaseCounter = () => {
        let reqCounterValue = counterValue + 1;
        setCounterValue(reqCounterValue);
        console.log(counterValue);//not shows updated value as it takes some time to update and re-run this function component
    };

    const decreaseCounter = () => {
        let reqCounterValue = counterValue - 1;
        if (reqCounterValue >= 0) {
            setCounterValue(reqCounterValue);
        }
    };

    return (
        <SafeAreaProvider>
            <View style={styles.body}>
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