import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const BoxScreen = () => {

    return (
        <SafeAreaProvider>
            <View style={styles.viewStyle}>
                <Text style={styles.textOneStyle}>Child #1</Text>
                <Text style={styles.textTwoStyle}>Child #2</Text>
                <Text style={styles.textThreeStyle}>Child #3</Text>
            </View>
        </SafeAreaProvider>
    );

};
/**
 * some child style properties like => top, bottom , left and right what they do is when the whole layout is rendere then that particular child gets shifted according to assigned property value and overlaps it's siblings as they are not affected. so basically first the layout is rendered normally then the feected child will position itself afterward.
 */
const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: '#000',
        height: 200,
        // alignItems: 'center',
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: '#f00',
    },
    textTwoStyle: {//It will obey some rules set by parent element , in this case=> alignItems:'center', but ignore some like=>alignItems:'stretch'
        borderWidth: 3,
        borderColor: '#f00',
        // position: 'absolute',//makes it ignore it's siblings put position itself based on some pley properties of it's parent element
        top:10,
        fontSize: 19,
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: '#f00',
    },
});

export default BoxScreen;
