import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    const addRandomColor = () => {

        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b = Math.random() * 256;

        if (`rgb(${r},${g},${b})` !== colors.name) {
            setColors([...colors, { name: `rgb(${r},${g},${b})` }]);
        }
    }

    return (
        <SafeAreaProvider>
            <View style={styles.body}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={addRandomColor}
                >
                    <Text style={styles.buttonTitle}>Add Color</Text>
                </TouchableOpacity>
                <FlatList
                    keyExtractor={item => { return item.name }}
                    data={colors}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.colorContainer}>
                                <View style={[{ backgroundColor: item.name }, styles.colorView]} />
                                <Text style={styles.colorText}>{item.name}</Text>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
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
    colorContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    colorView: {
        height: 50,
        width: 50,
    },
    colorText: {
        textAlign: 'center',
    },
});

export default ColorScreen;