import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeMenu from "./container/HomeMenu";
//import AddressForm from "./AddressForm";

export default function App() {
  return <HomeMenu />;
  //return <AddressForm/>
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
