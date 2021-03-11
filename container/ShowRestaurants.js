import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import { Container, Content, ListItem, List } from "native-base";

import Plats from "../component/homeMenu/Plats";
import { Row, Grid } from "react-native-easy-grid";

export default function ShowRestaurants() {
  const ListPlat = [
      {
        url:require('../assets/images/imgPlats/tikka.png'),
        description: "Poulet mariné au curry, servi avec frites et boisson au choix  ",
        price : '7,90€',
        popular :'Populaire',
        title:'Menu sandwich tikka',
      },
      {
        url:
          require('../assets/images/imgPlats/thai.png'),
          description: "Poulet mariné aux épices thaî, servi avec frites et boisson au choix",
          price : '7,90€',
          popular :'Populaire',
          title:'Menu sandwich thaî',
      },
      {
        url:
          require('../assets/images/imgPlats/thndori.png'),
          description: " Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
          price : '7,90€',
          popular :'',
          title:'Menu sandwich tandoori',
      },
      {
        url:
          require('../assets/images/imgPlats/steak.png'),
          description: "Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
          price : '10€',
          popular :'Populaire',
          title: 'Menu sandwich steak', 
      },
      {
        url:require('../assets/images/imgPlats/double.png'),
          description: "Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
          price : '10€',
          popular :'Populaire',
          title: 'Menu sandwich steak', 
      },
      {
        url:
          require('../assets/images/imgPlats/tikka.png'),
          description: "Poulet mariné, saveur d'Inde, servi avec frites et boisson aux choix",
          price : '10€',
          popular :'Populaire',
          title: 'Menu sandwich steak', 
      },
    
    ];

  return (
    <Container style={{marginTop:100}} >
      <Grid>
        <Row size ={10} >
         

              <Content>
                <List>
                      <ListItem>
                      <Text style={{color:'#A9A9A9'}}>  
                           <Text style={styles.header}>
                             Menus sandwichs 🥙 🍟 🥤 </Text>
                        
                            {"\n"}
                            {"\n"}                        
                           Sandwich au choix, frites et boisson</Text>

                      </ListItem> 
                </List>
  
              
              </Content>
            
        </Row >

         <Row size={85}>
         <Container >
          <ScrollView vertical={true}>
            {ListPlat.map(menu => {
                  return (
                    
                    <View>
                    <Plats 
                        description={menu.description}
                        pathPlats={menu.url}
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

const styles = StyleSheet.create({
  header: {
    fontSize : 18,
     color:'#2E3434',
      fontWeight:'bold'
  },

});