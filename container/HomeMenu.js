import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Container, Content } from "native-base";
import Card from "../component/homeMenu/Card";
import HeaderHome from "../component/homeMenu/HeaderHome";

export default function HomeMenu() {
  const foodType = [
    {
      url:
        "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
      name: "Shakira",
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
    {
      url:
        "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
      name: "Shakira",
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
  ];

  return (
    <Container style={styles.container}>
      <ScrollView>
        <Content>
          <ScrollView horizontal={true}>
            <HeaderHome />
          </ScrollView>
          <ScrollView horizontal={true}>
            {foodType.map((photo, index) => {
              return (
                <View key={index}>
                  <Card
                    name={photo.name}
                    url={photo.url}
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
  container: { marginTop: 45 },
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
