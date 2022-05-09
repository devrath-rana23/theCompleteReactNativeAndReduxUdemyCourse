import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
//We can pass props inside this NavigationEvents like callback functions which we want to call whener the user is navigated to this screen
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
/*
  <NavigationEvents
  //When we just navigate to signin screen
          onWillFocus={() => {}}//will be called when we press button to navigate to this screen
          onDidFocus={() => {}}//this is called when we land on this screen

          onWillBlur={() => {}}//will be called at the time we navigate away from this screen
          onDidBlur={() => {}}//it is called when the transition completes or we navigate away
        />
  */
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};
/*
<NavigationEvents onWillFocus={clearErrorMessage}
*/
SigninScreen.navigationOptions = {
  header: () => false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;
