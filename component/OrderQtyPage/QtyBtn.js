import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default class QtyBtn extends React.Component {
  render() {
    return (
      <View>
        <Card style={styles.container}>
          <CardItem>
            <Body style={styles.dContainer}>
              <Ionicons
                name="remove-circle-outline"
                size={30}
                color={"#00c1b2"}
              />
              <Text style={styles.text}>1</Text>
              <Ionicons
                name="add-circle-outline"
                size={30}
                color={"#00c1b2"}
              />
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  dContainer: {
    padding: 0,
    height: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    marginTop: 40,
  },
});
