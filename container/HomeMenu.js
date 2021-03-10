import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Container, Header, Content, Tab, Tabs } from "native-base";

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
      <ScrollView>
        <Text>Test 2</Text>
        <Text>Test 2</Text>
        <Text>Test 2</Text>
        <Text>Test 2</Text>
        <Text>Test 2</Text>
        <Text>Test 2</Text>
        <Text>Test 2</Text>
        <Text>Test 2</Text>
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
  now: {
    color: "#abadac",
  },
  location: {
    color: "#2e3434",
  },
});
