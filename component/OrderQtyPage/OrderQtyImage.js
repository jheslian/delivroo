import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

export default class OrderQtyImage extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.cover}
          source={url}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height: 200,
  },
  cover: {
    flex: 1,
  },
  close: {
    margin: 5,
    position: "absolute",
    top: 0,
    left: 0,
    color: "white",
  },
  resize: {
    margin: 5,
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "white",
  },
});
