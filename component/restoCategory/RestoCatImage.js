import * as React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Card, CardItem } from "native-base";

export default class RestoCatImage extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <View style={styles.container}>
        <Card>
          <CardItem cardBody>
            <ImageBackground
              resizeMode="cover"
              style={styles.cover}
              source={url}
            />
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  cover: {
    flex: 1,
    height: 200,
    width: null,
  },

  promo: {
    borderRadius: 50,
    width: 60,
    height: 0,
    backgroundColor: "#ff3300",
    position: "absolute",
    top: -65,
    left: 0,
    margin: 15,
    borderColor: "yellow",
    borderWidth: 1,
    transform: [{ rotate: "-30deg" }],
    overflow: "visible",
  },
  promoTxt: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: 13,
    left: 13,
  },
  dTime: {
    borderRadius: 30,
    width: 80,
    height: 40,
    backgroundColor: "#e5e5e5",
    position: "absolute",
    bottom: -10,
    right: 0,
    marginRight: 10,
  },
  dTxt: {
    color: "black",
    fontWeight: "bold",
    position: "absolute",
    top: 3,
    left: 13,
  },
});
