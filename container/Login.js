import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Login extends Component {
  constructor() {
    super();
  }

  render() {
    const categorie = this.props.navigation.getParam("categorie");

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text>Login</Text>
        <Text>{categorie}</Text>
      </View>
    );
  }
}
