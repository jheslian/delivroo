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
        "https://static.lexpress.fr/medias_12020/w_2048,h_1146,c_crop,x_0,y_154/w_2000,h_1125,c_fill,g_north/v1550742170/sushi-saumon-maki-saumon-japonais_6154396.jpg",
      name: "TAC C'OS" ,
      description: "3.5 Good (300) ",
      others: ". Mexican . Salad ",
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
      flex: 1,
      padding: 10
      
      
   },
  //  icon:{
  //     marginTop:50,
  //     alignSelf: 'flex-end',
  //     position: 'absolute',
  //     bottom: 35,
  //     color:"green"
  //  }
}) 

