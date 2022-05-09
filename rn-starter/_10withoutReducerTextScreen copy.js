import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const TextScreen = () => {

    const [password, setPassword] = useState('');

    return (
        <SafeAreaProvider>
            <View>
                <Text>Enter Password:</Text>
                <TextInput
                    // Two very IMPORTANT props autoCapitalize,autoCorrect
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                    value={password}//This is done to make sure our parent element =>TextScreen does not try to inspect the child element=>TextInput directly and communicate using props, even if we don't need to provide value prop to it and it would work perfectly fine. It's weird but necessary
                    onChangeText={(newValue) => setPassword(newValue)}
                ></TextInput>
                <Text>Entered Password - {password}</Text>

                {/* {password.length > 5 ? <Text>''</Text> : <Text>Password must be greater than 5 characters.</Text>} */}
                {password.length > 5 ? null : <Text>Password must be greater than 5 characters.</Text>}

            </View>
        </SafeAreaProvider>
    );

};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
});

export default TextScreen;
