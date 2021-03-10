import * as React from "react";
import { Text, View, Image} from "react-native";
import { Container} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
export default class Plats extends React.Component {
  render() {
    const { url, description, price, popular, title } = this.props;
    return (
      <View>
          <Container style={{height:170, paddingBottom:30, paddingLeft:5, paddingRight:7}}>
            <Grid>
               
               <Col size={70}  >

                  
                    <Row size={70}>
                        
                      <Text style={{color:'#A9A9A9'}}>
                        <Text style={{fontSize : '18', marginLeft:0, color:'#2E3434'}}> {title}</Text>
                         {"\n"}

                          {description}
                      </Text>
                    </Row> 
                  <Row size={30}>
                      <Text style={{color:'#ABADAC'}}>{price}. <Text style={{color:'orange'}}>{popular}</Text></Text>
                    </Row>
                 
               </Col>

               <Col size={30}>
                    <Image style={{width:'100%', height:'100%',borderRadius:8}}
                                   source={{
                                    uri: url
                              }} resizeMode = 'cover'>
                      </Image>
              
               </Col>

               
               
          </Grid>
          </Container>
          
      
      </View>
    );
  }
}
