import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from "./src/screens/ListScreen";

// Stack Navigator is a little object that decides what content we're going to show on the screen at any given point in time.So, we want to add in the component that we just created as an additional option for this STACK navigator to show.

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentsScreen,//We added this new component as a possible option for our stack navigator to show to the user.
    List: ListScreen,
  },
  {
    initialRouteName: "Home",//This is description or configuration option that tells this navigator thing what the first component is that should be displayed right now.Here it is set as Home so it will search the Home option from above options or stack and display that component screen first.
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
