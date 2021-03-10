import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function HeaderHome() {
  return (
    <View style={styles.displayH}>
      <Image
        style={styles.image}
        source={require("../../assets/images/images.jpeg")}
      />
      <View style={styles.displayV}>
        <Text style={styles.now}> Now</Text>
        <Text style={styles.location}> Location</Text>
      </View>
      <Image
        source={require("../../assets/images/user_icon.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  displayH: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  displayV: {
    flexDirection: "column",
  },
  now: {
    color: "#abadac",
  },
  location: {
    color: "#2e3434",
  },
});
