import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ColorCounter from '../components/ColorCounter';

const SquareColorScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log(`Red-${red},Green-${green},Blue-${blue}`);

    return (
        <SafeAreaProvider>
            <View
                style={styles.body}>
                <ColorCounter
                    color='Red'
                    onIncrease={() => {
                        if (red <= 255 && red >= 0 && red !== 255) {
                            setRed(red + 1);
                        }
                    }
                    }
                    onDecrease={() => {
                        if (red <= 255 && red >= 0 && red !== 0) {
                            setRed(red - 1);
                        }
                    }
                    }
                />
                <ColorCounter
                    color='Green'
                    onIncrease={() => {
                        if (green <= 255 && green >= 0 && green !== 255) {
                            setGreen(green + 1);
                        }
                    }
                    }
                    onDecrease={() => {
                        if (green <= 255 && green >= 0 && green !== 0) {
                            setGreen(green - 1);
                        }
                    }
                    }
                />
                <ColorCounter
                    color='Blue'
                    onIncrease={() => {
                        if (blue <= 255 && blue >= 0 && blue !== 255) {
                            setBlue(blue + 1);
                        }
                    }
                    }
                    onDecrease={() => {
                        if (blue <= 255 && blue >= 0 && blue !== 0) {
                            setBlue(blue - 1);
                        }
                    }
                    }
                />
                <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
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