import * as React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import { Container, Content } from "native-base";
import Card from "../component/homeMenu/Card";
import HeaderHome from "../component/homeMenu/HeaderHome";
import SecondCarousel from "../component/homeMenu/SecondCarousel";
import ThirdCarousel from "../component/homeMenu/ThirdCarousel";

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
        source: require("../assets/images/Categories/kebab.png"),
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
        <HeaderHome />
        <ScrollView>
          <Content>
            <ScrollView horizontal={true}>
              {foodType.map((photo, index) => {
                return (
                  <View key={index}>
                    <Card
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
            <ScrollView horizontal={true}>
              <SecondCarousel />
            </ScrollView>
            <ScrollView>
              <ThirdCarousel />
              <ThirdCarousel />
            </ScrollView>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginTop: 45 },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
