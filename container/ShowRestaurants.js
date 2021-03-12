import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import { Container, Content } from "native-base";

import Plats from "../component/homeMenu/Plats";
import { Row, Grid } from "react-native-easy-grid";

export default class ShowRestaurants extends React.Component {
  render() {
    const { navigation } = this.props;
    const dish = this.props.navigation.getParam("dish");

    return (
      <Container style={{ marginTop: 100 }}>
        <Grid>
          <Row size={10}>
            <Content>
              <Text style={{ color: "#A9A9A9" }}>Plats</Text>
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
