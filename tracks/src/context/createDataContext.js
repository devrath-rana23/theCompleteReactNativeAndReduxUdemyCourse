import React, { useReducer } from "react";
import { View, Text } from "react-native";

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  //Provider is our component which will make data available to all of our application. Context is the Context object that we use to get access to that object
  return { Context, Provider };
};
