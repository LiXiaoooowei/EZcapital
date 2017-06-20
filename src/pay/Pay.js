import React, {Component} from "react";
import {View} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, Text, List, ListItem, Thumbnail, Card, CardItem} from "native-base";
import getTheme from '../../native-base-theme/components/Card.js';
import material from '../../native-base-theme/variables/material';

export default class Pay extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style = {{flex: 1, flexDirection: 'row', marginTop: 10,justifyContent: 'space-between', marginLeft: 5, marginRight: 5}}>
                        <Button primary style = {{"width": BUTTON_WIDTH, "height": BUTTON_WIDTH, "borderRadius": BUTTON_RADIUS}} onPress={()=>this.props.navigation.navigate("QuickPay")}>
                            <Icon name = "pizza" size={ICON_SIZE}/>
                        </Button>
                        <Button success style = {{"width": BUTTON_WIDTH, "height": BUTTON_WIDTH, "borderRadius": BUTTON_RADIUS}} onPress={()=>this.props.navigation.navigate("QuickPay")}>
                            <Icon name = "bicycle" size={ICON_SIZE}/>
                        </Button>
                        <Button info style = {{"width": BUTTON_WIDTH, "height": BUTTON_WIDTH, "borderRadius": BUTTON_RADIUS}} onPress={()=>this.props.navigation.navigate("QuickPay")}>
                            <Icon name = "medkit" size={ICON_SIZE}/>
                        </Button>
                        <Button warning style = {{"width": BUTTON_WIDTH, "height": BUTTON_WIDTH, "borderRadius": BUTTON_RADIUS}} onPress={()=>this.props.navigation.navigate("QuickPay")}>
                            <Icon name = "paper-plane" size={ICON_SIZE} />
                        </Button>
                        <Button danger style = {{"width": BUTTON_WIDTH, "height": BUTTON_WIDTH, "borderRadius": BUTTON_RADIUS}} onPress={()=>this.props.navigation.navigate("QuickPay")}>
                            <Icon name = "person" size={ICON_SIZE}/>
                        </Button>
                    </View>
                    <View>
                        <Text style = {{fontSize: 30, fontStyle: 'italic',fontWeight: '100', textAlign: 'center', marginTop: 30}}>Recommend to Use...</Text>
                        <List>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain'}}/>
                                <Body>
                                <Text>General</Text>
                                <Text note>Up to 1% rebate on all spending</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Lotte World</Text>
                                <Text note>20% off Lotte World Free Pass tickets</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_citi.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Grab Rides</Text>
                                <Text note>20% cash back on all Grab rides from 7 April - 6 July 2017</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_dbs.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Golden Village</Text>
                                <Text note>Exclusive discounts on movie tickets and popcorn combo sets</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sign-Up Promotion</Text>
                                <Text note>Up to $150 in Uber credits</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_uob.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Dining & Entertainment</Text>
                                <Text note>Up to 8% rebate on Dining & Entertainment</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>General</Text>
                                <Text note>Enjoy up to 3.5% Cash Back on all purchases</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </View>
                    <View>
                        <Text style = {{fontSize: 30,fontStyle: 'italic', fontWeight: '100', color: 'red', textAlign: 'center'}}>Credit Reminder</Text>
                        <Card style = {getTheme(material)}>
                            <CardItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain'}} />
                                <Body style = {{marginLeft: 5}}><Text>Dear customer, your credit payment with transaction number #012345678 will due in 3 days. If there are any discrepancies, kindly contact us immediately.</Text></Body>
                            </CardItem>
                        </Card>
                        <Card style={getTheme(material)}>
                            <CardItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain'}} />
                                <Body style = {{marginLeft: 5}}><Text>Dear customer, your credit payment with transaction number #012345678 will due in 3 days. If there are any discrepancies, kindly contact us immediately.</Text></Body>
                            </CardItem>
                        </Card>
                        <Card style={getTheme(material)}>
                            <CardItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_dbs.png')} style = {{resizeMode: 'contain'}} />
                                <Body style = {{marginLeft: 5}}><Text>Dear customer, your credit payment with transaction number #012345678 will due in 3 days. If there are any discrepancies, kindly contact us immediately.</Text></Body>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container>
        );
    }
}

Pay.navigationOptions = ({ navigation }) => ({
    header: (
        <Header style = {{"backgroundColor": "#2E4053"}}>
            <Left>
                <Button
                    transparent
                    onPress={() => navigation.navigate("DrawerOpen")}
                >
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
            <Title>Pay</Title>
            </Body>
            <Right />
        </Header>
    )
});


const BUTTON_WIDTH = 60;
const BUTTON_RADIUS = BUTTON_WIDTH/2.0;
const ICON_SIZE = 50;