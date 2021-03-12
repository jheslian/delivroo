import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { db } from "../restaurant";

export default class RestoH extends React.Component {
  render() {
    const {
      width,
      height,
      navigateToScreen,
      filter,
      horizontal,
    } = this.props;

    let result;
    if (filter == "distance") {
      result = db.sort((a, b) => {
        if (a.distance < b.distance) return -1;
        if (b.distance < a.distance) return 1;

        return 0;
      });
    } else if (filter == "note") {
      result = db.sort((a, b) => {
        if (a.note < b.note) return -1;
        if (b.note < a.note) return 1;

        return 0;
      });
    } else {
      result = [db[4], db[9], db[13]];
    }

    const pressHandler = listsDish => navigateToScreen(listsDish);

    return (
      <View style={styles.container}>
        <ScrollView horizontal={horizontal}>
          {result.map((details, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => pressHandler(details.listsDish)}>
                  <ImageBackground
                    style={{
                      width: width,
                      height: height,
                      marginLeft: 10,
                      marginTop: 15,
                      borderRadius: 5,
                      overflow: "hidden",
                    }}
                    source={
                      details.listsDish[0].url
                    }></ImageBackground>
                </TouchableOpacity>

                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    position: "absolute",
                    bottom: 0,
                    left: 10,
                    marginBottom: 5,
                    marginLeft: 10,
                  }}>
                  {details.restaurantName}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    padding: 10,
  },
});
