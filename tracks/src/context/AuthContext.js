import createDataContext from "./createDataContext";
import React from "react";
import { View, Text } from "react-native";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });

      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });

      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const signout = (dispatch) => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);

const AuthContext = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default AuthContext;
