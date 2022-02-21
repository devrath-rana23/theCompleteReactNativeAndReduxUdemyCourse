import { StyleSheet, Text, View } from "react-native";
import React from "react";
// MapView is very similar to Image element with no height width attached to it by default
import MapView, { Polyline } from "react-native-maps";

// initialRegion prop decides which region in map it will show by default latitudeDelta decides zoom value on latitude
// Polyline takes array of coordinates and show that as natural line in map

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      points.push({
        latitude: 37.33233 + i * 0.001,
        longitude: -122.03121 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 37.33233 - i * 0.002,
        longitude: -122.03121 + i * 0.001,
      });
    }
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
