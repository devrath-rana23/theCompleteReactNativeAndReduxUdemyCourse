import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import { Provider as LocationProvider } from "./src/context/LocationContext";

// We will have two types of screens one type for authentication and other type is non authentication which are rest of the screen except login and signup therefore since login and signup represents different flow from rest of the screens so their initial letter is lowercase to showcase two different flows

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);
// setNavigator() is kind of hook called inside our component that allows us to navigate around
export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator) => setNavigator(navigator)} />
      </AuthProvider>
    </LocationProvider>
  );
};
