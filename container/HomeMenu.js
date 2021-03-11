import * as React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Container, Content } from "native-base";
import Card from "../component/homeMenu/Card";
import HeaderHome from "../component/homeMenu/HeaderHome";

import RestoH from "../container/RestoH";

export default class HomeMenu extends React.Component {
  constructor() {
    super();
    this.state = { categorie: "All" };
  }
  render() {
    const { navigation } = this.props;

    const foodType = [
      {
        source: require("../assets/images/Categories/Discount.png"),
        name: "Offres",
      },
      {
        source: require("../assets/images/Categories/Groceries.png"),
        name: "Epicerie",
      },
      {
        source: require("../assets/images/Categories/Pizza.png"),
        name: "Pizza",
      },
      {
        source: require("../assets/images/Categories/Burger.png"),
        name: "Burger",
      },
      {
        source: require("../assets/images/Categories/Sandwich.png"),
        name: "Sandwich",
      },
      {
        source: require("../assets/images/Categories/Dessert.png"),
        name: "Dessert",
      },
      {
        source: require("../assets/images/Categories/Breakfast.png"),
        name: "Petit-dej",
      },
      {
        source: require("../assets/images/Categories/Sushi.png"),
        name: "Sushi",
      },
      {
        source: require("../assets/images/Categories/Tacos.png"),
        name: "Tacos",
      },
      {
        source: require("../assets/images/Categories/PokeBowl.png"),
        name: "Poke-Bowl",
      },
      {
        source: require("../assets/images/Categories/Kebab.png"),
        name: "Kebab",
      },
      {
        source: require("../assets/images/Categories/Vietnamese.png"),
        name: "Viet",
      },
      {
        source: require("../assets/images/Categories/Bagel.png"),
        name: "Bagels",
      },
    ];

    return (
      <Container style={styles.container}>
        <HeaderHome
          navigateToLogin={() =>
            this.props.navigation.navigate("Login")
          }
        />
        <ScrollView>
          <ScrollView horizontal={true}>
            {foodType.map((photo, index) => {
              return (
                <View key={index}>
                  <Card
                    horizontale={false}
                    categorie={this.state.categorie}
                    navigation={navigation}
                    name={photo.name}
                    source={photo.source}
                    width={85}
                    height={85}
                  />
                </View>
              );
            })}
          </ScrollView>
          <ScrollView>
            <Text>A la une</Text>
            <RestoH
              height={150}
              width={320}
              navigateToScreen={() =>
                navigation.navigate("OneRestaurant")
              }
            />
          </ScrollView>
          <ScrollView>
            <Text>Livraison la plus rapide</Text>
            <RestoH
              height={175}
              width={300}
              navigateToScreen={() =>
                navigation.navigate("OneRestaurant")
              }
            />
          </ScrollView>
          <ScrollView>
            <Text>Meilleures notes</Text>
            <RestoH
              height={200}
              width={350}
              navigateToScreen={() =>
                navigation.navigate("OneRestaurant")
              }
            />
          </ScrollView>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginTop: 0 },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
