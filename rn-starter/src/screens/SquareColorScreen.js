import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ColorCounter from '../components/ColorCounter';

const SquareColorScreen = () => {

    const COLOR_COUNTER_CHANGE_VALUE = 10;

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {

        // color === 'red', 'green', 'blue'
        // change === '+10', '-10'

        if (color === 'red') {
            if (red + change <= 255 || red + change >= 0) setRed(red + change);
        } else if (color === 'green') {
            if (green + change <= 255 || green + change >= 0) setGreen(green + change);
        } else if (color === 'blue') {
            if (blue + change <= 255 || blue + change >= 0) setBlue(blue + change);
        }

    };

    console.log(`Red-${red},Green-${green},Blue-${blue}`);

    return (
        <SafeAreaProvider>
            <View
                style={styles.body}>
                <ColorCounter
                    color='Red'
                    onIncrease={setColor('red', +10)}
                    onDecrease={setColor('red', -10)
                    }
                />
                <ColorCounter
                    color='Green'
                    onIncrease={setColor('green', +10)}
                    onDecrease={setColor('green', -10)}
                />
                <ColorCounter
                    color='Blue'
                    onIncrease={setColor('blue', +10)}
                    onDecrease={setColor('blue', -10)}
                />
                <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} //double {{}} means outer set reference to some javascript expression and inner set creates an object literal 
                />
            </View>
        </SafeAreaProvider>
    );

};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
});

export default SquareColorScreen;