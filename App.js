import "react-native-gesture-handler";
import React from "react";
import { StyleSheet} from "react-native";
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
