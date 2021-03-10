import * as React from "react";
import {
  StyleSheet,
  Button,
  View
} from "react-native";
import OrderQtyImage from "../component/OrderQtyPage/OrderQtyImage";
import OrderQtyDesc from "../component/OrderQtyPage/OrderQtyDesc";
import QtyBtn from "../component/OrderQtyPage/QtyBtn";


export default function OrderQty() {
   
  const foodDesc = 
    {
      url:
        "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg",
      name: "Burger",
      description: "The burger details goes here! On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions",
      price: 3
    };

  return (
    
      <View style={styles.container}>
         <OrderQtyImage url={foodDesc.url} />
         <OrderQtyDesc name={foodDesc.name} price={foodDesc.price} description={foodDesc.description} />
         <QtyBtn/>
         <Button style={styles.icon} title="Add item" color="#00c1b2"/>
             
      </View>

    
  );
}

const styles = StyleSheet.create({
   container:{
      flexDirection: 'column',
      flex: 1
      
   },
   icon:{
      marginTop:50,
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 35,
      color:"green"
   }
}) 

