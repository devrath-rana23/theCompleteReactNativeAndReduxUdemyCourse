import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackListScreen = ({ navigaton }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>TrackListScreen</Text>
        <Button
          title="Go to Track detail"
          onPress={() => navigaton.navigate("TrackDetail")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
