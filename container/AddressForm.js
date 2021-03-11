import * as React from "react";

import { StyleSheet, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import { Container, Header, Content, Left, Body } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class AddressForm extends React.Component {
  render() {
    const { navigation } = this.props;
    const pressHandler = () => {
      navigation.navigate("HomeMenu");
    };

    return (
      <Container
        style={(styles.container, { backgroundColor: "white" })}>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button
              type="clear"
              icon={
                <Icon
                  name="west"
                  size={30}
                  color="#00c1b2"
                  onPress={pressHandler}
                />
              }
            />
          </Left>
          <Body>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Confirmer adresse
            </Text>
          </Body>
        </Header>
        <Content style={styles.content}>
          <Input placeholder="Nom" />
          <Input placeholder="N° d'appart / Nom de l'immeuble (optionnel)" />
          <Input placeholder="Adresse Ligne 1" />
          <Input placeholder="Code postal" />
          <Input
            style={{ marginBottom: 0 }}
            placeholder="Numéro de téléphone"
          />
          <Text style={{ marginLeft: 10, marginBottom: 10 }}>
            Nous ne vous contacterons uniquement en cas de problème
            avec votre commande.
          </Text>
          <Input placeholder="Avez-vous des instructions pour votre coursier ?" />
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                marginTop: 15,
                marginBottom: 15,
                color: "white",
                alignSelf: "center",
              }}>
              Enregistrer adresse
            </Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 30,
  },
  container: {
    backgroundColor: "white",
    color: "black",
  },
  button: {
    width: 300,
    borderRadius: 4,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    backgroundColor: "#00c1b2",
  },
});
