import * as React from "react";

import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Container } from "native-base";

import Card from "../component/homeMenu/Card";
import HeaderHome from "../component/homeMenu/HeaderHome";
import RestoH from "../container/RestoH";
import { db } from "../restaurant";
import { foodType } from "../FoodType";

export default class HomeMenu extends React.Component {
  constructor() {
    super();
    this.state = { categorie: "All" };
  }
  render() {
    const { navigation } = this.props;

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
                    shopList={db}
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
