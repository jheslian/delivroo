import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeMenu from "./container/HomeMenu";
import OrderQty from "./container/OrderQty";

export default function App() {
  //return <HomeMenu />;
  //return <OrderQty/>;
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
