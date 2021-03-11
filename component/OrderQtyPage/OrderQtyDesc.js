import * as React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { Card, CardItem, Body } from "native-base";
import { render } from "react-dom";

export default class OrderQtyDesc extends React.Component {
   render() {
      const {name, price, description} = this.props;
      return ( 
         <View>
            <Card style={styles.container}>
               <CardItem>
               <Body style={styles.contentRow}>   
                  <Text style={styles.name}>{name} </Text>
                  <Text style={styles.price}>€ {price}</Text>   
               </Body>
               </CardItem>
               <CardItem style={styles.desc2}> 
               <Body>   
                  <Text style={styles.desc}>{description}</Text>                      
               </Body>
               </CardItem>
            </Card>          
         </View>
      );
   }   
}

const styles = StyleSheet.create({
   name:{
      fontSize: 16,
      marginBottom:10,
      fontWeight: "bold"
      
   },
   desc:{
      fontSize: 16,
      color:"gray"
   },
   price:{
      fontSize: 16,
      color: "gray",
      textAlign: 'right'
   },
   dContainer:{
      padding:10
   },
   container:{
      marginTop: 40, 
   },
   contentRow:{
      flex: 1,
      flexDirection:"row",
      justifyContent:"space-between"
   },
   desc2:{
      paddingTop: 0, 
      
   },   
 

  
});
