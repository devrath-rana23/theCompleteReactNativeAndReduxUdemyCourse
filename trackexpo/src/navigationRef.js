import { NavigationActions } from 'react-navigation';

let navigator;
// This function will be called with some navigation object that we get from react native that's going to allow us to navigate around to different screens is simply assigned to navigator.

// This is used to whenever we want to navigate around our application from anywhere outside of a component. We call it with navigation route of the screen we want to navigate to

// We simple import this navigate function and call it with a route we want to navigate to
export const setNavigator = nav => {
  navigator = nav;
};
// by dispatching NavigationAction we are telling the react navigation to change it's state and show a different screen

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
