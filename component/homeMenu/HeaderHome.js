import * as React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class HeaderHome extends React.Component {
  constructor() {
    super();
    this.state = { categorie: "All" };
  }
  render() {
    const { navigation } = this.props;
    const goLogin = () => {
      navigation.navigate("Login");
    };
    return (
      <View style={styles.displayH}>
        <Image
          style={styles.image}
          source={require("../../assets/images/images.jpeg")}
        />
        <View style={styles.displayV}>
          <Text style={styles.now}> Now</Text>
          <Text style={styles.location}> Location</Text>
        </View>
        <TouchableOpacity onPress={goLogin}>
          <Image
            source={require("../../assets/images/user_icon.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -25,
  },
  displayV: {
    flexDirection: "column",
    marginLeft: -200,
  },
  now: {
    color: "#abadac",
  },
  location: {
    color: "#2e3434",
  },
});
