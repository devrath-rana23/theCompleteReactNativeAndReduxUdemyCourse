import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AuthForm
          headerText="Sign In to Your Account"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Sign In"
        />
        <NavLink
          routeName="Signup"
          text="Don't have an account? Sign up instead!"
        />
      </View>
    </SafeAreaView>
  );
};
/*
<NavigationEvents onWillFocus={clearErrorMessage}
*/
SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
