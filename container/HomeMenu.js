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
  ];

  return (
    <Container>
      <ScrollView>
        <Text>Test 2</Text>
        <Content>
          <ScrollView horizontal={true}>
            <View style={styles.header}>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Text>test</Text>
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                style={styles.logo}
                source={{
                  uri:
                    "https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg",
                }}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
              <Image
                source={require("../assets/images/user_icon.png")}
              />
            </View>
          </ScrollView>
          <ScrollView horizontal={true}>
            {foodType.map(photo => {
              return (
                <View>
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
