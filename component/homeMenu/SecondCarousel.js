import { Card, Text } from "native-base";
import { useWindowDimensions, Image, StyleSheet } from "react-native";
import * as React from "react";

export default function SecondCarousel() {
  const screen_width = useWindowDimensions().width;
  return (
    <Image
      style={{
        width: screen_width * 0.85,
        height: 200,
        marginTop: 10,
      }}
      source={require("../../assets/images/photocv1.jpg")}
    />
  );
  // (
  // <Card
  //   width={screen_width*0.8}
  //   height={200}
  //   name="J'en profite"
  //   url="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"
  // />
  //   );
}

const styles = StyleSheet.create({});
