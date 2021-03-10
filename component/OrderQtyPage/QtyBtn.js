import * as React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { Card, CardItem, Body } from "native-base";
import { Ionicons } from "@expo/vector-icons";


export default class QtyBtn extends React.Component {
   render() {
      const {name, price, description} = this.props;
      return ( 
         <View>
            <Card style={styles.container}>
               <CardItem>
               <Body style={styles.dContainer}>   
               
               
                  <Ionicons name="remove-circle-outline" size={35} color={"#00c1b2"}/>    
                  <Text style={styles.text}>1</Text>
                  <Ionicons name="add-circle-outline" size={35} color={"#00c1b2"} /> 
                                  
               </Body>
               </CardItem>
            </Card>          
         </View>
      );
   }   
}

const styles = StyleSheet.create({
   text:{
      fontSize: 30,
      fontWeight:"bold"
      
   },
   dContainer:{
      padding:10,
      flex:1,
      flexDirection:"row",
      justifyContent: "space-around"
     
      
   },
   container:{
      marginTop: 40,
      
   },

  
});
