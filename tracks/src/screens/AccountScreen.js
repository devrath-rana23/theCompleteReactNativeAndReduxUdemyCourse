import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 48 }}>Account Screen</Text>
        <Spacer>
          <Button title="SIgn Out" onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default AccountScreen;
