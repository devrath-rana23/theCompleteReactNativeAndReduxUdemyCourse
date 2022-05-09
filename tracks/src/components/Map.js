import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
// MapView is very similar to Image element with no height width attached to it by default
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

// initialRegion prop decides which region in map it will show by default latitudeDelta decides zoom value on latitude
// Polyline takes array of coordinates and show that as natural line in map

const Map = () => {
  //Destructure off the state object

  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const initialLocation = {
    longitude: -122.0312186,
    latitude: 37.33233141,
  };

  // region prop automatically centres our map to updated current location

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
