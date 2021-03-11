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
  constructor() {
    super();
  }

  render() {
    const { navigation } = this.props;
    const shopList = this.props.navigation.getParam("shopList");
    const foodDesc = [
      {
        url:
          "https://www.regal.fr/sites/art-de-vivre/files/styles/large/public/r89-tacos-viande-avocat-coriandre-citron_ss.jpg?itok=GHwf_jjG",
        name: "TAC C'OS",
        description: "3.5 Good (300) ",
        others: ". Mexican . Salad ",
        distance: "4.6 km away",
        fee: "2.50 delivery",
        promo: "Spend €20, get 10% off",
      },
      {
        url:
          "https://static.lexpress.fr/medias_12020/w_2048,h_1146,c_crop,x_0,y_154/w_2000,h_1125,c_fill,g_north/v1550742170/sushi-saumon-maki-saumon-japonais_6154396.jpg",
        name: "Kebab de la gare",
        description: "5.0 Very Good (600) ",
        others: ". Burger . Tacos ",
        distance: "2 km away",
        fee: ".99 delivery",
        promo: "Spend €25, get 15% off",
      },
      {
        url:
          "https://static.lexpress.fr/medias_12020/w_2048,h_1146,c_crop,x_0,y_154/w_2000,h_1125,c_fill,g_north/v1550742170/sushi-saumon-maki-saumon-japonais_6154396.jpg",
        name: "The best sushi in town",
        description: "1.5 Bad (200) ",
        others: ". Vietnamese . Thai ",
        distance: "100 m away",
        fee: "Free delivery",
        promo: "Spend €20, get 20% off",
      },
      {
        url:
          "https://img.grouponcdn.com/deal/ktC2CdDQNzARPvCgUdDYzeAnQHW/kt-960x576/v1/c870x524.webp",
        name: "My Kebab",
        description: "3.5 Good (300) ",
        others: ". Mexican . Salad ",
        distance: "4.6 km away",
        fee: "2.50 delivery",
        promo: "Spend €20, get 10% off",
      },
    ];
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
