import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import {
    Container,
    Header,
    Content,
    Footer,
    Left,
    Body
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function AddressForm() {

    return (
        <Container style={styles.container}>
            <Header>
                <Left>
                    <Button
                        type="clear"
                        icon={
                            <Icon 
                                name="west"
                                size={30}
                                color="#00c1b2"
                                />
                            }
                    />
                </Left>
                <Body>
                    <Text>Confirmer adresse</Text>
                </Body>
            </Header>
            <Content>
                <Input
                    placeholder='Nom'
                />
                <Input
                    placeholder="N° d'appart / Nom de l'immeuble (optionnel)"
                />
                <Input
                    placeholder='Adresse Ligne 1'
                />
                <Input
                    placeholder='Code postal'
                />
                <Input
                    placeholder='Numéro de téléphone'
                />
                <Input
                    placeholder='Avez-vous des instructions pour votre coursier ?'
                />
            </Content>
            <Footer>
                <Button style={styles.button} title="Enregistrer adresse"/>
            </Footer>
        </Container>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 20,
    },
    container: {
        backgroundColor: "white",
        color:"black",
    },
    button: {
        color: "#00c1b2"
    }
});