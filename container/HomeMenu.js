import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import Card from "../component/homeMenu/Card";

export default function HomeMenu() {
  const foodType = [
    {
      source:
        require("../assets/images/cateories/Discount.png"),
      name: "Offres",
    },
    {
      source:
        require("../assets/images/cateories/Groceries.png"),
      name: "Épicerie",
    },
    {
      source:
        require("../assets/images/cateories/Pizza.png"),
      name: "Pizza",
    },
    {
      source:
        require("../assets/images/cateories/Burger.png"),
      name: "Burger",
    },
    {
      source:
        require("../assets/images/cateories/Sandwich.png"),
      name: "Sandwich",
    },
    {
      source:
        require("../assets/images/cateories/Dessert.png"),
      name: "Dessert",
    },
    {
      source:
        require("../assets/images/cateories/Breakfast.png"),
      name: "Petit déjeuner",
    },
    {
      source:
        require("../assets/images/cateories/Sushi.png"),
      name: "Sushi",
    },
    {
      source:
        require("../assets/images/cateories/Tacos.png"),
      name: "Tacos",
    },
    {
      source:
        require("../assets/images/cateories/PokeBowl.png"),
      name: "Poke Bowl",
    },
    {
      source:
        require("../assets/images/cateories/Kebab.png"),
      name: "Kebab",
    },
    {
      source:
        require("../assets/images/cateories/Vietnamese.png"),
      name: "Vietnamien",
    },
    {
      source:
        require("../assets/images/cateories/Bagel.png"),
      name: "Bagels",
    },
  ];

  return (
    <Container>
      <ScrollView>
        <Text>Test</Text>
        <Content>
          <ScrollView horizontal={true}>
            {foodType.map(photo => {
              return (
                <View>
                  <Card
                    name={photo.name}
                    source={photo.source}
                    width={75}
                    height={75}
                  />
                </View>
              );
            })}
          </ScrollView>
        </Content>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 15,
    marginTop: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  header_column: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  foodTypeImage: {
    width: 75,
    height: 75,
    marginLeft: 10,
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
  },
  foodTypeText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    marginBottom: 5,
    marginLeft: 10,
  },
  now: {
    color: "#abadac",
  },
  location: {
    color: "#2e3434",
  },
});
