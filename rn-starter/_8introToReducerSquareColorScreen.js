import React, { useReducer } from 'react';//useReducer is hook function that adds functionality to use a reducer in our functional component
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

// Technically reducer function can be declared inside our functional component but we define it outside our component and reason is that as in drawio reducers diagram Argument #1 , is our state object have all our different states. If we define reducer function inside of SquareColorScreen, we will want to refer to that first argument right there as state, because that is going to be our state object. But if we have that argument right there that's called state, it'll be very confused with this other declaration of state over here. Now technically this would not result an error but it will be very confusing.
// Here action argument tells us how to change our state object

//This function will always return a state object for any case no matter how many times it's called and if we don't return anything the state object will have value undefined when functional component re-renders the screen.

// Here we are using reducer instead of setter of useState hook.

//Here alias for action object can be howToChangeState

const reducer = (state, action) => {

    //state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 10 || -10 }

    switch (action.colorToChange) {
        case 'red':
            // Never going to do: state.red=state.red+15 
            // To make changes to our state object we are going to rebuild our state object from scratch into a new object but the new object will have the changed value for red that we want
            // return { ...state, red: state.red + action.amount };//here in this new object copied the state object using ...state and override it's red property value.Here not directly change our state object but creating new object entirely.
            /**
             * we have=> {red: 0, green: 0, blue: 0 , red: state.red + action.amount }
             * red gets override now we have=>
             * {green: 0, blue: 0 , red: state.red + action.amount }
             */

            return state.red + action.amount > 255 || state.red + action.amount < 0
                ?
                state
                :
                { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ?
                state
                :
                { ...state, green: state.green + action.amount };

        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ?
                state
                :
                { ...state, blue: state.blue + action.amount };

        default:
            return state;//this means we didn't make any changes to our state object and returned it as it is.
    }

};

const SquareColorScreen = () => {

    // syntax similar to useState, here reducer is a function and second argument is default value of our state objects. Here state will initially equal to default state objrct=>{ red: 0, green: 0, blue: 0 }. So, state variable is going to essentially be how we access our different state values, so before we had three different values floating around of red, green and blue, now instead they are all combined into this one single object=>  state. 

    //whenever our state object changes because of reducer function the entire component re renders similar to in case of useState()

    //How do we call the reducer and make change to our state object=> that's the job of dispatch function => alias for dispatch could be runMyReducer in which we will pass parameter which can be used as action argument in our reducer function

    // const [state, runMyReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    // We write dispatch by convention which you can consider as runMyReducer

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    console.log(state);
    console.log(`rgb(${red},${green},${blue})`);

    return (
        <SafeAreaProvider>
            <View
                style={styles.body}>
                <ColorCounter
                    color='Red'
                    onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                />
                <ColorCounter
                    color='Green'
                    onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                />
                <ColorCounter
                    color='Blue'
                    onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                />

                {/* <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }} //We can destructure state to const {red,green,blue}=state above and print red green blue individually. */}

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