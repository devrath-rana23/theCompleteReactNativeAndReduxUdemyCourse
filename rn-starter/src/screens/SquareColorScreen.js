import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const SquareColorScreen = () => {

    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(255);

    const showColor = (colorSelected) => {

        if (red <= 255 && red >= 0 && green <= 255 && green >= 0 && blue <= 255 && blue >= 0) {
            if (colorSelected === 'moreRed') {
                if (red !== 255) {
                    let newRed = red + 1;
                    setRed(newRed);
                }
            } else if (colorSelected === 'lessRed') {
                if (red !== 0) {
                    let newRed = red - 1;
                    setRed(newRed);
                }
            } else if (colorSelected === 'moreGreen') {
                if (green !== 255) {
                    let newGreen = green + 1;
                    setGreen(newGreen);
                }
            } else if (colorSelected === 'lessGreen') {
                if (green !== 0) {
                    let newGreen = green - 1;
                    setGreen(newGreen);
                }
            } else if (colorSelected === 'moreBlue') {
                if (blue !== 255) {
                    let newBlue = blue + 1;
                    setBlue(newBlue);
                }
            } else if (colorSelected === 'lessBlue') {
                if (blue !== 0) {
                    let newBlue = blue - 1;
                    setBlue(newBlue);
                }
            }
        }
        console.log(`Red-${red},Green-${green},Blue-${blue}`);
    }

    return (
        <SafeAreaProvider>
            <View>
                <View>
                    <Text>Red</Text>
                    <TouchableOpacity
                        onPress={() => showColor('moreRed')}
                    >
                        <Text>More Red</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => showColor('lessRed')}
                    >
                        <Text>Less Red</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Green</Text>
                    <TouchableOpacity
                        onPress={() => showColor('moreGreen')}
                    >
                        <Text>More Green</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => showColor('lessGreen')}
                    >
                        <Text>Less Green</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Blue</Text>
                    <TouchableOpacity
                        onPress={() => showColor('moreBlue')}
                    >
                        <Text>More Blue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => showColor('lessBlue')}
                    >
                        <Text>Less Blue</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} />
            </View>
        </SafeAreaProvider>
    );

};

const styles = StyleSheet.create({

});

export default SquareColorScreen;