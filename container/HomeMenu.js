import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import Swiper from "react-native-swipe-image";

export default function HomeMenu() {
  const photos = {
    images: [
      {
        url:
          "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
        name: "shakira",
      },
      {
        url:
          "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg",
        name: "cat",
      },
      {
        url:
          "https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg",
        name: "baby",
      },
    ],
  };
  return (
    <Container>
      <Container style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/images/images.jpeg")}
        />
        <View style={styles.header_column}>
          <Text style={styles.now}>Now</Text>
          <Text style={styles.location}>Current Location</Text>
        </View>
        <Image
          style={styles.logo}
          source={require("../assets/images/user_icon.png")}
        />
      </Container>
      <Header hasTabs />
      <Tabs>
        <Tab heading="Livraison">
          <Text>Restaurants Livraisons</Text>
        </Tab>
        <Tab heading="&Agrave; Emporter">
          <Text>Restaurants Emporté</Text>
        </Tab>
      </Tabs>
      <Swiper
        images={photos.images}
        imageHeight={500}
        textSize={35}
        textBold={true}
        textColor={"red"}
        textUnderline={true}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 15,
    marginTop: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
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
  now: {
    color: "#abadac",
  },
  location: {
    color: "#2e3434",
  },
});
