import * as React from "react";
import {
  StyleSheet,
  Button,
  View
} from "react-native";
import RestoCatDesc from "../component/restoCategory/RestoCatDesc";
import RestoCatImage from '../component/restoCategory/RestoCatImage';


export default function RestoPerCategory() {
   
  const foodDesc = 
    {
      url:
        "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg",
      name: "TAC C'OS" ,
      description: "3.5 Good (300) ",
      others: ". Mexican Salad . Pass Sodexo",
      distance: "4.6 km away",
      fee: "2.50 delivery",
      promo: "Spend €20, get 10% off"

    };

  return (
    
      <View style={styles.container}>
         <RestoCatImage url={foodDesc.url}/>
         <RestoCatDesc name={foodDesc.name}  fee={foodDesc.fee} description={foodDesc.description} distance={foodDesc.distance} promo={foodDesc.promo} others={foodDesc.others}/>
      </View>

    
  );
}

const styles = StyleSheet.create({
   container:{
      flexDirection: 'column',
      flex: 1
      
   },
  //  icon:{
  //     marginTop:50,
  //     alignSelf: 'flex-end',
  //     position: 'absolute',
  //     bottom: 35,
  //     color:"green"
  //  }
}) 

