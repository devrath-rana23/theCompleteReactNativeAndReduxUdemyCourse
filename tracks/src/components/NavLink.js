import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Spacer from "../components/Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

// NavLink called using withNavigation prop
export default withNavigation(NavLink);
