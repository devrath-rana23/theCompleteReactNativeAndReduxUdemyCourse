import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/*
const HomeScreen = (props) => {
  or
const HomeScreen = props => {
  console.log(props);
  O/p
  Object {//This is props object
  "navigation": Object {//navigation property(specifically added by stack navigator we are using to show our component) points to an object and navigation has keys of 'action', 'addListener','dangerouslyGetParent'... etc.
    "actions": Object {
      "dismiss": [Function dismiss],
      "goBack": [Function goBack],
      "navigate": [Function navigate],
      "pop": [Function pop],
      "popToTop": [Function popToTop],
      "push": [Function push],
      "replace": [Function replace],
      "reset": [Function reset],
      "setParams": [Function setParams],
    },
    "addListener": [Function addListener],
    "dangerouslyGetParent": [Function anonymous],
    "dismiss": [Function anonymous],
    "dispatch": [Function anonymous],
    "emit": [Function emit],
    "getChildNavigation": [Function getChildNavigation],
    "getParam": [Function anonymous],
    "getScreenProps": [Function anonymous],
    "goBack": [Function anonymous],
    "isFirstRouteInParent": [Function isFirstRouteInParent],
    "isFocused": [Function isFocused],
    "navigate": [Function anonymous],
    "pop": [Function anonymous],
    "popToTop": [Function anonymous],
    "push": [Function anonymous],
    "replace": [Function anonymous],
    "reset": [Function anonymous],
    "router": undefined,
    "setParams": [Function anonymous],
    "state": Object {
      "key": "id-1639555362572-0",
      "routeName": "Home",
    },
  },
  "screenProps": undefined,
}

  console.log(props.navigation);
O/p=>
"actions": Object {
      "dismiss": [Function dismiss],
      "goBack": [Function goBack],
      "navigate": [Function navigate],
      "pop": [Function pop],
      "popToTop": [Function popToTop],
      "push": [Function push],
      "replace": [Function replace],
      "reset": [Function reset],
      "setParams": [Function setParams],
    },
    "addListener": [Function addListener],
    "dangerouslyGetParent": [Function anonymous],
    "dismiss": [Function anonymous],
    "dispatch": [Function anonymous],
    "emit": [Function emit],
    "getChildNavigation": [Function getChildNavigation],
    "getParam": [Function anonymous],
    "getScreenProps": [Function anonymous],
    "goBack": [Function anonymous],
    "isFirstRouteInParent": [Function isFirstRouteInParent],
    "isFocused": [Function isFocused],
    "navigate": [Function anonymous],
    "pop": [Function anonymous],
    "popToTop": [Function anonymous],
    "push": [Function anonymous],
    "replace": [Function anonymous],
    "reset": [Function anonymous],
    "router": undefined,
    "setParams": [Function anonymous],
    "state": Object {
      "key": "id-1639555362572-0",
      "routeName": "Home",
    },

    When we Land on new screen then in our header we will be automatically provided with a back button by navigation library
*/

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button
          title='Go to Components Demo'
          // onPress={() => props.navigation.navigate('Components')} props is used for navigation property only so, we destructure the props argument above to {navifation i.e. we are extracting the navigation proprty only}
          onPress={() => navigation.navigate('Components')}
        />
        <Button
          title='Go to List Demo'
          onPress={() => navigation.navigate('List')}
        />
        <Button
          title='Go to Image Demo'
          onPress={() => navigation.navigate('Image')}
        />
        <Button
          title='Go to Counter Demo'
          onPress={() => navigation.navigate('Counter')}
        />
        <Button
          title='Go to Color Demo'
          onPress={() => navigation.navigate('Color')}
        />
        <Button
          title='Go to SquareColor Demo'
          onPress={() => navigation.navigate('SquareColor')}
        />

        {/* In TouchableOpacity you will notice that when yu press on it for brief moment it will fade out thus such name as TouchableOpacity */}
        {/* <TouchableOpacity
          onPress={() => props.navigation.navigate('List')}
        >
          <Text>Go to List Demo</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
