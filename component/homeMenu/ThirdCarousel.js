import * as React from "react";
import { Text, View, Image, useWindowDimensions } from "react-native";

export default function ThirdCarousel() {
  const screen_width = useWindowDimensions().width;
  return (
    <View>
      <Text>Test</Text>
      <Image
        source={require("../../assets/images/photocv1.jpg")}
        style={{ width: screen_width*0.9, height: 350, margin: 12 }}
      />
    </View>
  );
}
