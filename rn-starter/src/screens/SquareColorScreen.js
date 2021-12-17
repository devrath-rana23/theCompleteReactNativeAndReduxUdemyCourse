import React, { useReducer } from 'react';//useReducer is hook function that adds functionality to use a reducer in our functional component
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {

    //state === { red: number, green: number, blue: number }
    // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 10 || -10 }

    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ?
                state
                :
                { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ?
                state
                :
                { ...state, green: state.green + action.payload };

        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ?
                state
                :
                { ...state, blue: state.blue + action.payload };

        default:
            return state;
    }

};

const SquareColorScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });//second argument of useReducer can be array or simply sa string nstead of object but generally it is object
    const { red, green, blue } = state;
    console.log(state);
    console.log(`rgb(${red},${green},${blue})`);

    return (
        <SafeAreaProvider>
            <View
                style={styles.body}>
                <ColorCounter
                    color='Red'
                    onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                />
                <ColorCounter
                    color='Green'
                    onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
                />
                <ColorCounter
                    color='Blue'
                    onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
                />

                <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }}
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