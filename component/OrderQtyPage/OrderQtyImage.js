import * as React from "react";
import { Button, Text, View, ImageBackground, StyleSheet, Image } from "react-native";
import { Container, Header, Content } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default class OrderQtyImage extends React.Component {
  render() {
  
    const {url} = this.props;
    return (
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.cover}
          source={{ uri: url }}
        />
        <Ionicons style={styles.close} name="ios-close-circle" size={35} />     
        <Ionicons style={styles.resize} name="ios-resize" size={30} /> 
      </View>
    );
  }
} 

const styles = StyleSheet.create({ 
   container: {
      marginTop: 40,
      height: 200
    },
    cover: {
      flex: 1,    
    },
    close: {
      margin: 5,
      position: "absolute",
      top: 0,
      left: 0,
      color: "white"
    },
    resize: {
      margin: 5,
      position: "absolute",
      bottom: 0,
      right: 0,
      color: "white",
      
    },

 });
 
 
