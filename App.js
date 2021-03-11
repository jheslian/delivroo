import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeMenu from "./container/HomeMenu";
import Navigator from "./routes/homeStack";




export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "green",
    color: "red",
  },
});

import Navigator from "./routes/homeStack";
<<<<<<< HEAD
import OrderQty from "./container/OrderQty";
  return <RestoPerCategory/>
  return <Navigator />;
import RestoPerCategory from "./container/RestoPerCategory";