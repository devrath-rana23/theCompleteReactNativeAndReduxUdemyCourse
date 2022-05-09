import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ComponentsScreen = () => {

  const name = 'Devrath';

  return (
    <SafeAreaProvider>
      <View>
        <Text style={styles.heading}>Getting started with React Native!</Text>
        <Text style={styles.content}>My name is {name}</Text>
      </View>
    </SafeAreaProvider>
  );

}

export default ComponentsScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 45,
  },
  content: {
    fontSize: 20,
  },
});