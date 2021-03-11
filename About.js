import * as React from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import {
    Container,
    Header,
    Content,
    Footer,
    Left,
    Body,
    Row
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";

export default function About() {

    return (
        <Container>
            <Header style={styles.header}>
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
                    <Text>À propos de notre application</Text>
                </Body>
            </Header>
            <Content style={styles.main}>

                    <TouchableOpacity style={styles.button}>
                        <Ionicons style={styles.icon}
                            name="mail-outline"
                            size={30}
                            color="#bac3c3"
                            />
                        <Text>
                            Nous contacter à propos de votre commande
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons style={styles.icon}
                            name="chatbox-outline"
                            size={30}
                            color="#bac3c3"
                            />
                        <Text>
                            Dites-nous ce que vous pensez de l'app
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons style={styles.icon}
                            name="logo-google-playstore"
                            size={30}
                            color="#bac3c3"
                            />
                        <Text>
                            Notez-nous sur le Play Store
                        </Text>
                    </TouchableOpacity>

                    <Text style={{marginTop:30}}>Version 3.59.0</Text>
                    <Text>{'\u00A9'} 2013-21 Deliveroo.</Text>
                    <Text>Développé à Londres.</Text>
                    <TouchableOpacity style={styles.clearButton}>
                        <Text style={styles.coloredText}>Conditions générales</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.clearButton}>
                        <Text style={styles.coloredText}>Confidentialité</Text>
                    </TouchableOpacity>


            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: "white",
        marginBottom:30,
    },
    main: {
        backgroundColor:"#f9fafa",
    },
    button: {
        flexDirection: "row",
        backgroundColor:"white",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
    },
    clearButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
    },
    coloredText: {
        color: "#00c1b2",
    },
    icon: {
        marginLeft: 20,
        marginRight: 15
    }
});