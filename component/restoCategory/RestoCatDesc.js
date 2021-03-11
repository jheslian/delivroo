import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { Card, CardItem, Body } from "native-base";


export default class RestoCatDesc extends React.Component {
   render() {
      const {name, fee, description, promo, others, distance} = this.props;
      return ( 
         <View>
            <Card style={styles.container}>
               <CardItem listItemPadding={0}>
                  <Body style={styles.dContainer}>   
                     <Text style={styles.name}>{name} </Text>
                  </Body>
               </CardItem>

               <CardItem style={styles.cItem}>
                  <Body style={styles.dContainer}> 
                     <Ionicons style={styles.star} name="star" size={20} color="#4DA4B5" />  
                     <Text style={styles.desc}>{description}</Text> 
                     <Text style={styles.desc}>{others}</Text> 
                  </Body>
               </CardItem>

               <CardItem style={styles.cItem}>
                  <Body style={styles.d2Container}>
                     <Text style={styles.desc}>{distance} . </Text>
                     <Text style={styles.price}>€{fee}</Text>                                     
                  </Body>
               </CardItem>

               <CardItem style={styles.cItem}>
                  <Body style={styles.d2Container}>
                     <Ionicons style={styles.resize} name="pricetag" size={20} color="#ff3300" />
                     <Text style={styles.promo}>{promo}</Text> 
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
      fontWeight: "bold"
      //marginRight:250,
     
      
   },
   desc:{
      fontSize: 16,
      color:"gray"
   },
   price:{
      fontSize: 16,
      color: "gray",
      
   },
   dContainer:{     
      flex:1,
      flexDirection:"row",
      
   },
   d2Container:{ 
      flex:1,
      flexDirection:"row",
      

   },
   container:{
      paddingRight:20,
      paddingBottom:10,
      marginTop:30,
      
      
      
   },
   promo:{
      
      fontSize: 16,
      color:"#ff3300"
      
   },
   cItem:{
      paddingTop: 2, 
      paddingBottom: 0
   },
   star:{
      paddingRight:5
   }   
 

  
});
