import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Accuracy,
  requestPermissionAsync,
  watchPositionAsync,
} from "expo-location";

export default (callback) => {
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err]; //returning array is convention of hooks
};

const styles = StyleSheet.create({});
