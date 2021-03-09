import * as React from "react";
import { StyleSheet, Text, View, Image, Header } from "react-native";

export default function HeaderMenu() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("../assets/images/images.jpeg")}
      />
      <View style={styles.header_column}>
        <Text style={styles.now}>Now</Text>
        <Text style={styles.location}>Current Location</Text>
      </View>
      <Image
        style={styles.logo}
        source={require("../assets/images/user_icon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 15,
    marginLeft: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_column: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  now: {
    color: "#abadac",
  },
  location: {
    color: "#2e3434",
  },
});
