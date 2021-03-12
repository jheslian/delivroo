import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { db } from "../restaurant";

export default class RestoH extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { width, height, navigateToScreen, filter } = this.props;

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

    const pressHandler = (listsDish) => navigateToScreen(listsDish);

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {db.map((details, index) => {
            console.log(details.listsDish)
            return (
              <View key={index}>
                <TouchableOpacity onPress={pressHandler(details.listsDish)}>
                  <ImageBackground
                    style={{
                      width: width,
                      height: height,
                      marginLeft: 10,
                      borderRadius: 5,
                      overflow: "hidden",
                    }}
                    source={
                      details.listsDish[0].url
                    }></ImageBackground>
                </TouchableOpacity>
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
