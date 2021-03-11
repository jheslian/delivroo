import * as React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Container, Content, ListItem, List } from "native-base";

import Plats from "../component/homeMenu/Plats";
import { Row, Grid } from "react-native-easy-grid";

export default class ShowRestaurants extends React.Component {
  render() {
    const ListPlat = [
      {
        url: require("../assets/images/imgPlats/tikka.png"),
        description:
          "Poulet mariné au curry, servi avec frites et boisson au choix  ",
        price: "7,90€",
        popular: "Populaire",
        title: "Menu sandwich tikka",
      },
      {
        url: require("../assets/images/imgPlats/thai.png"),
        description:
          "Poulet mariné aux épices thaî, servi avec frites et boisson au choix",
        price: "7,90€",
        popular: "Populaire",
        title: "Menu sandwich thaî",
      },
      {
        url: require("../assets/images/imgPlats/thndori.png"),
        description:
          " Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
        price: "7,90€",
        popular: "",
        title: "Menu sandwich tandoori",
      },
      {
        url: require("../assets/images/imgPlats/steak.png"),
        description:
          "Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
        price: "10€",
        popular: "Populaire",
        title: "Menu sandwich steak",
      },
      {
        url: require("../assets/images/imgPlats/double.png"),
        description:
          "Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
        price: "10€",
        popular: "Populaire",
        title: "Menu sandwich steak",
      },
      {
        url: require("../assets/images/imgPlats/tikka.png"),
        description:
          "Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
        price: "10€",
        popular: "Populaire",
        title: "Menu sandwich steak",
      },
    ];

    const { navigation } = this.props;
    const dish = this.props.navigation.getParam("dish");

    return (
      <Container style={{ marginTop: 100 }}>
        <Grid>
          <Row size={10}>
            <Content>
              <Text style={{ color: "#A9A9A9" }}>
                Plats
              </Text>
            </Content>
          </Row>

          <Row size={85}>
            <Container>
              <ScrollView vertical={true}>
                {dish.map((menu, index) => {
                  return (
                    <View key={index}>
                      <Plats
                        description={menu.description}
                        navigation={navigation}
                        pathPlats={menu.url}
                        price={menu.price}
                        popular={menu.popular}
                        title={menu.name}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            </Container>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: "#2E3434",
    fontWeight: "bold",
  },
});
