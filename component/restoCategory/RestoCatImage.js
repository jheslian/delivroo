import * as React from "react";
import { Button, Text, View, ImageBackground, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Card,Body, CardItem, Right } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default class RestoCatImage extends React.Component {
  render() {
    const {url} = this.props;
    return (
      <View style={styles.container}>
        <Card>
          <CardItem cardBody>
            <Image
                resizeMode="cover"
                style={styles.cover}
                source={{ uri: url}}
              />
          </CardItem>
        </Card>
        <TouchableHighlight style = {styles.promo}>
          <Text style={styles.promoTxt}> 15 % {'\n'} off</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.dTime}>
          <Text style={styles.dTxt}> 10 - 15{'\n'}    min</Text>
        </TouchableHighlight>
      </View>
    );
  }
} 

const styles = StyleSheet.create({ 
   container: {
      marginTop: 40,
    
    }, 
    cover: {
      flex: 1,  
      height: 200,
      width:null
    },  
    
    promo:{
      borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor:'#ff3300',
        position: "absolute",
        top: 0,
        left: 0,
        margin:15,
        borderColor: "yellow",
        borderWidth:1,
        transform: [{ rotate: '-30deg'}] 
    },
    promoTxt:{
      color: "white",
      fontWeight: "bold",
      position: "absolute",
      top: 13,
      left: 13,
    },
    dTime:{
      borderRadius: 30,
        width: 80,
        height: 40,
        backgroundColor:'#e5e5e5',
        position: "absolute",
        bottom:-10,
        right:0,
        marginRight:10 
        
    },
    dTxt:{
      color: "black",
      fontWeight: "bold",
      position: "absolute",
      top: 3,
      left: 13,
    },

 });
 
 
