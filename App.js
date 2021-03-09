import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderMenu from "./container/HeaderMenu";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>test up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <HeaderMenu  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "green",
    color: "red",
  },
});
