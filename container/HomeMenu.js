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
          navigateToAbout={() =>
            this.props.navigation.navigate("About")
          }
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
          <ScrollView style={styles.scroll}>
            <Text style={styles.txtTitle}>A la une</Text>
            <RestoH
              height={150}
              width={320}
              horizontal={true}
              filter="restaurantName"
              navigateToScreen={dish =>
                navigation.navigate("OneRestaurant", { dish })
              }
            />
          </ScrollView>
          <ScrollView style={styles.scroll}>
            <Text style={styles.txtTitle}>
              Livraison la plus rapide
            </Text>
            <RestoH
              height={175}
              horizontal={true}
              width={300}
              filter="distance"
              navigateToScreen={dish =>
                navigation.navigate("OneRestaurant", { dish })
              }
            />
          </ScrollView>
          <ScrollView style={styles.scroll}>
            <Text style={styles.txtTitle}>Meilleures notes</Text>
            <RestoH
              height={200}
              horizontal={true}
              width={350}
              filter="note"
              navigateToScreen={dish =>
                navigation.navigate("OneRestaurant", { dish })
              }
            />
          </ScrollView>
          <ScrollView style={styles.scroll}>
            <Text style={styles.txtTitle}>Tous les Restaurants</Text>
            <RestoH
              height={200}
              horizontal={false}
              width={350}
              filter="distance"
              navigateToScreen={dish =>
                navigation.navigate("OneRestaurant", { dish })
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
  txtTitle: {
    marginLeft: 25,
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 7,
  },
  scroll: {
    marginTop: 20,
  },
});
