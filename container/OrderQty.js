import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import OrderQtyImage from "../component/OrderQtyPage/OrderQtyImage";
import OrderQtyDesc from "../component/OrderQtyPage/OrderQtyDesc";
import QtyBtn from "../component/OrderQtyPage/QtyBtn";

export default class OrderQty extends React.Component {
  render() {
    const price = this.props.navigation.getParam("price");
    const description = this.props.navigation.getParam("description");
    const name = this.props.navigation.getParam("name");
    const url = this.props.navigation.getParam("url");

    return (
      <View style={styles.container}>
        <OrderQtyImage url={url} />
        <OrderQtyDesc
          name={name}
          price={price}
          description={description}
        />
        <QtyBtn />

        <TouchableHighlight
          style={{
            width: null,
            height: 60,
            backgroundColor: "#00c1b2",
            marginTop: 30,
          }}>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 15,
              color: "white",
              fontSize: 20,
            }}>
            Add item
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  icon: {
    marginTop: 50,
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 35,
    color: "green",
  },
});
