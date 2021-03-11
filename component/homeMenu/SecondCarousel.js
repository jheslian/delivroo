import { Text } from "native-base";
import { useWindowDimensions, Image, StyleSheet } from "react-native";
import * as React from "react";
import Card from "../homeMenu/Card";

export default function SecondCarousel() {
  const screen_width = useWindowDimensions().width;
  const photoList = require("../../assets/images/photocv1.jpg");
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
        width={screen_width * 0.85}
        height={200}
        name="J'en profite"
        source={photoList}
      />
    );
}

const styles = StyleSheet.create({});
