import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ComponentsScreen = () => {

  const name = 'Devrath';

  return (
    <View>
      <Text style={styles.heading}>Getting started with React Native!</Text>
      <Text style={styles.content}>My name is {name}</Text>
    </View>
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