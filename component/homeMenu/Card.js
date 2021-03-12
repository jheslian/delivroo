import * as React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default class Card extends React.Component {
  render() {
    const {
      source,
      name,
      width,
      height,
      navigation,
      shopList,
      categorie,
    } = this.props;

    const pressHandler = () => {
      let result = shopList.filter(shop => shop.category == name);
      navigation.navigate("Restaurant", { shopList: result });
    };

    return (
      <View>
        <TouchableOpacity onPress={pressHandler}>
          <ImageBackground
            style={{
              width: width,
              height: height,
              marginLeft: 10,
              borderRadius: 5,
              overflow: "hidden",
              position: "relative",
            }}
            source={source}>
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
        </TouchableOpacity>
      </View>
    );
  }
}
