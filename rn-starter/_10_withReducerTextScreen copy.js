import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const reducer = (state, action) => {

    //state==={input_text:''}
    //action==={ type: 'display_input_text', payload: any string }

    switch (action.type) {

        case 'display_input_text':
            return action.payload.length > 5
                ?
                { ...state, input_text: action.payload, password_validation_message: '' }
                :
                { ...state, input_text: action.payload, password_validation_message: 'Password must be longer than 5 characters.' };

        default:
            return state;
    }

};

const TextScreen = () => {

    const [state, dispatch] = useReducer(reducer, { input_text: '', password_validation_message: '' });

    const { input_text, password_validation_message } = state;
    console.log(state);

    return (
        <SafeAreaProvider>
            <View>
                <Text>Enter Password:</Text>
                <TextInput
                    // Two very IMPORTANT props autoCapitalize,autoCorrect
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                    value={state.input_text}//This is done to make sure our parent element =>TextScreen does not try to inspect the child element=>TextInput directly and communicate using props, even if we don't need to provide value prop to it and it would work perfectly fine. It's weird but necessary
                    onChangeText={(newValue) => dispatch({ type: 'display_input_text', payload: newValue })}
                ></TextInput>
                <Text>Entered Password - {state.input_text}</Text>
                <Text>{password_validation_message}</Text>
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
