import * as React from "react";
import { Text, View, ImageBackground } from "react-native";

export default class Card extends React.Component {
  render() {
    const { url, name, width, height } = this.props;
    return (
      <View>
        <ImageBackground
          style={{
            width: width,
            height: height,
            marginLeft: 10,
            borderRadius: 5,
            overflow: "hidden",
            position: "relative",
          }}
          source={{
            uri: url,
          }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              position: "absolute",
              bottom: 0,
              left: 0,
              marginBottom: 5,
              marginLeft: 10,
            }}>
            {name}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}