import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { useLocation } from "../hooks/useLocation";
import { Context as LocationContext } from "../context/LocationContext";
import { withNavigationFocus } from "react-navigation";

// Pass this prop in withNavigationFocus tell us whether or not this particular component is currently focused or actually visible
const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  //Now if we have a project where we need user's location changing over time we can just import useLocation Hook and paas a callback function inside it and get error when somthing goes wrong when we tried to ask for permission
  const [err] = useLocation(addLocation);

  console.log(isFocused); //gives true if this screen is focused

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
