import * as React from "react";
import {
  Text,
  View,
  ScrollView,
} from "react-native";
import { Container } from "native-base";

import Plats from "../component/homeMenu/Plats";
import { Row, Grid } from "react-native-easy-grid";

export default function ShowRestaurants() {
  const ListPlat = [
      {
        url:
          "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
        description: "Poulet mariné au curry, servi avec frites et boisson au choix  ",
        price : '7,90€',
        popular :'Populaire',
        title:'Menu sandwich tikka',
      },
      {
        url:
          "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?cs=srgb&dl=adorable-animal-cat-9413.jpg&fm=jpg",
          description: "Poulet mariné aux épices thaî, servi avec frites et boisson au choix",
          price : '7,90€',
          popular :'Populaire',
          title:'Menu sandwich thaî',
      },
      {
        url:
          "https://i.pinimg.com/236x/c6/6b/11/c66b111bf4df809e87a1208f75d2788b.jpg",
          description: " Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
          price : '7,90€',
          popular :'',
          title:'Menu sandwich tandoori',
      },
      {
        url:
          "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
          description: "Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
          price : '10€',
          popular :'Populaire',
          title: 'Menu sandwich steak', 
      },
      {
        url:
          "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
          description: "Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
          price : '10€',
          popular :'Populaire',
          title: 'Menu sandwich steak', 
      },
      {
        url:
          "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100",
          description: "Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
          price : '10€',
          popular :'Populaire',
          title: 'Menu sandwich steak', 
      },
    
    ];

  return (
    <Container style={{marginTop:100}} >
      <Grid>
        <Row size ={15} >
            <Text> Bonjour </Text>
            <Text > Bonjour </Text>
         
        </Row >

         <Row size={85} style={{marginBottom:30}}>
         <Container style={{borderBottom: 'solid', borderBottomColor:'red'}}>
          <ScrollView vertical={true}>
            {ListPlat.map(menu => {
                  return (
                    
                    <View>
                    <Plats 
                        description={menu.description}
                        url={menu.url}
                        price={menu.price}
                        popular={menu.popular}
                        title={menu.title}
                      
                    />


                    </View> 
                  );
                })
                }
          </ScrollView>
        </Container>  

      </Row>
  </Grid>

       
    </Container>
  );
}

