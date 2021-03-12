import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RestoCatDesc from "../component/restoCategory/RestoCatDesc";
import RestoCatImage from "../component/restoCategory/RestoCatImage";

export default class RestoPerCategory extends React.Component {

  render() {
    const { navigation } = this.props;
    const shopList = this.props.navigation.getParam("shopList");
  
    let dish = {};
    const pressHandler = () => {
      navigation.navigate("OneRestaurant", { dish });
    };

    return (
      <View style={styles.container}>
        <ScrollView>
          {shopList.map((shop, index) => {
            dish = shop.listsDish;
            return (
              <View key={index}>
                <TouchableOpacity onPress={pressHandler}>
                  <RestoCatImage url={shop.listsDish[0].url} />
                  <RestoCatDesc
                    name={shop.restaurantName}
                    fee={shop.fee}
                    description={shop.description}
                    distance={shop.distance}
                    promo={shop.promo}
                    others={shop.others}
                  />
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
