import * as React from "react";
import { Text, View, Image} from "react-native";
import { Container, Content} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
export default class Plats extends React.Component {
  render() {
    const {pathPlats, description, price, popular, title } = this.props;
    return (
      <View>
         <Container style={{height:170, paddingBottom:25, paddingLeft:5, paddingRight:5}}>
              <Grid>
               
               <Col size={70}  >

                  
                    <Row size={70}>
                        
                      <Content>
                        <Text style={{  fontSize:18 , marginLeft:0, color:'#2E3434'}}> {title}
                        </Text >
                         <Text style={{color:'#A8A8A8',marginLeft:4}} >{description}</Text>
                      </Content>
                  </Row> 
                  <Row size={30}>
                      <Text style={{color:'#ABADAC'}}>{price}. <Text style={{color:'orange'}}>{popular}</Text></Text>
                  </Row>
                 
             </Col>

             <Col size={30}>
                      <Image style={{width:'100%', height:'100%',borderRadius:8}}
                                    source = {pathPlats}
                    
                                    resizeMode = 'cover'>
                    </Image>
                
            </Col>
   
               
          </Grid> 


      
          </Container>
          
      
      </View>
    );
  }
}
