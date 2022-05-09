import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ColorCounter from '../components/ColorCounter';

const COLOR_COUNTER_CHANGE_VALUE = 10;

const SquareColorScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {

        // color === 'red', 'green', 'blue'
        // change === '+10', '-10'

        switch (color) {

            case 'red':
                (((red + change) <= 255) && ((red + change) >= 0)) ? setRed(red + change) : '';
                return;//terminate with this each case so that it does not run other cases
            case 'green':
                (((green + change) <= 255) && ((green + change) >= 0)) ? setGreen(green + change) : '';
                return;
            case 'blue':
                (((blue + change) <= 255) && ((blue + change) >= 0)) ? setBlue(blue + change) : '';
                return;
            default:
                return;

        }

    };

    console.log(`Red-${red},Green-${green},Blue-${blue}`);

    return (
        <SafeAreaProvider>
            <View
                style={styles.body}>
                <ColorCounter
                    color='Red'
                    onIncrease={() => setColor('red', COLOR_COUNTER_CHANGE_VALUE)}
                    onDecrease={() => setColor('red', -1 * COLOR_COUNTER_CHANGE_VALUE)
                    }
                />
                <ColorCounter
                    color='Green'
                    onIncrease={() => setColor('green', COLOR_COUNTER_CHANGE_VALUE)}
                    onDecrease={() => setColor('green', -1 * COLOR_COUNTER_CHANGE_VALUE)}
                />
                <ColorCounter
                    color='Blue'
                    onIncrease={() => setColor('blue', COLOR_COUNTER_CHANGE_VALUE)}
                    onDecrease={() => setColor('blue', -1 * COLOR_COUNTER_CHANGE_VALUE)}
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