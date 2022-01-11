import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Spacer>
          <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input label="Email" />
        <Spacer />
        <Input label="Password" />
        <Spacer>
          <Button title="Sign Up" />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
