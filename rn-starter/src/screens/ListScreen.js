import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const ListScreen = () => {

    return(
        <SafeAreaProvider>
            <View>
                <Text>Hi!</Text>
            </View>
        </SafeAreaProvider>
    );

};

const styles = StyleSheet.create({

});

export default ListScreen;