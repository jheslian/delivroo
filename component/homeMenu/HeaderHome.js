import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Header, Left, Right, Body } from "native-base";

export default class HeaderHome extends React.Component {

  goLogin = () => {
    const { navigateToLogin } = this.props;
    navigateToLogin();
  };
  goAbout = () => {
    const { navigateToAbout } = this.props;
    navigateToAbout();
  };

  render() {
    return (
      <Header style={styles.container}>
        <Left>
          <TouchableOpacity onPress={this.goAbout}>
            <Image
              style={styles.image}
              source={require("../../assets/images/images.jpeg")}
            />
          </TouchableOpacity>
        </Left>
        <Body>
          <View style={styles.displayV}>
            <Text style={styles.now}> Now</Text>
            <Text style={styles.location}> Location</Text>
          </View>
        </Body>
        <Right>
          <TouchableOpacity onPress={this.goLogin}>
            <Image
              source={require("../../assets/images/user_icon.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }
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
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  displayV: {
    flexDirection: "column",
  },
  now: {
    color: "#abadac",
  },
  location: {
    color: "#2e3434",
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#FFF",
  },
});
