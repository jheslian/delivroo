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
import { Col, Row, Grid } from "react-native-easy-grid";

export default function HomeMenu() {
  const ListPlats = [
    {
      url:
        "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
      name: "shakira",
      price:'23€',
      popular : 'yes',
    },
    {
      url:
        "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg",
      name: "cat",
      price: '23€',
      popular : 'yes',
    },
    {
      url:
        "https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg",
      name: "baby",
      price: '23€',
      popular : 'yes',
    },
    {
      url:
        "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
      name: "shakira",
      price:'23€',
      popular : 'yes',
    },
    {
      url:
        "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg",
      name: "cat",
      price: '23€',
      popular : 'yes',
    },
    {
      url:
        "https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg",
      name: "baby",
      price:'23€',
      popular : 'yes',

    },
  ];

  return (
    <Container >

<Grid>
    <Row size={25}>
       <Text>Bonjour 
      </Text>
    </Row>
    <Row size={75}>
      <ScrollView vertical={true}>
            {ListPlats.map(photo => {
              return (
                <View>
                  <Card
                    name={photo.name}
                    url={photo.url}
                    width={100}
                    height={75}
                  />
                </View>
              );
            })}
      </ScrollView>




    </Row>
</Grid>

       
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
