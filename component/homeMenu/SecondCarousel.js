import { Card, Text } from "native-base";
import { useWindowDimensions, Image, StyleSheet } from "react-native";
import * as React from "react";

export default function SecondCarousel() {
  const screen_width = useWindowDimensions().width;
  return (
    //     <Image
    //       style={{
    //         width: screen_width * 0.85,
    //         height: 200,
    //         marginTop: 10,
    //       }}
    //       source={require("../../assets/images/photocv1.jpg")}
    //     />
    //   );

    <Card
      width={screen_width * 0.8}
      height={200}
      name="J'en profite"
      source={require("../../assets/images/photocv1.jpg")}
    />
  );
}

const styles = StyleSheet.create({});
