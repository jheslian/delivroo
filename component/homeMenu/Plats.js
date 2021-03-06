import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Plats extends React.Component {
  render() {
    const {
      pathPlats,
      description,
      price,
      popular,
      title,
      navigation,
    } = this.props;

    const pressHandler = () => {
      navigation.navigate("Order", {
        name: title,
        description,
        price,
        url: pathPlats,
      });
    };

    return (
      <View>
        <TouchableOpacity onPress={pressHandler}>
          <Container style={styles.container}>
            <Grid>
              <Col size={70}>
                <Row size={70}>
                  <Content>
                    <Text style={styles.titre}> {title}</Text>
                    <Text style={styles.desc}>{description}</Text>
                  </Content>
                </Row>
                <Row size={30}>
                  <Text style={{ color: "#ABADAC" }}>
                    {price}. € -
                    {popular ? (
                      <Text style={{ color: "orange" }}>
                        Populaire
                      </Text>
                    ) : null}
                  </Text>
                </Row>
              </Col>

              <Col size={30}>
                <Image
                  style={styles.img}
                  source={pathPlats}
                  resizeMode="cover"
                />
              </Col>
            </Grid>
          </Container>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 170,
    paddingBottom: 25,
    paddingLeft: 5,
    paddingRight: 5,
  },
  titre: {
    fontSize: 18,
    marginLeft: 0,
    color: "#2E3434",
  },
  desc: { color: "#A8A8A8", marginLeft: 4 },
  img: { width: "100%", height: "100%", borderRadius: 8 },
});
