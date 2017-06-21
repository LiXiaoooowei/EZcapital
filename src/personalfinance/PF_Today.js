import React, {Component} from "react";
import {View, Image,Text,StyleSheet} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, List, ListItem, Thumbnail} from "native-base";
import Dimensions from 'Dimensions';


export default class PF_Today extends Component {

    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <Content>
                    <ListItem itemDivider />
                                <Header style = {{backgroundColor: 'white', height: 60,shadowColor: null,
                                    shadowOffset: null,
                                    shadowOpacity: null,
                                    shadowRadius: null,
                                    elevation: null}}>
                                    <Left><Text style = {{color: 'black'}}>Current</Text></Left>

                                    <Right>
                                        <Text style = {{color: '#2874F0'}}>More</Text>
                                    </Right>
                                </Header>
                    <List>
                        <ListItem>
                            <Left><Text style = {{color: 'red', fontSize: 30}}>+31.10%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>All</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'red', fontSize: 30}}>+26.66%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'red', fontSize: 30}}>+24.43%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'red', fontSize: 30}}>+24.22%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    </List>
                    <ListItem itemDivider />
                    <Header style = {{backgroundColor: 'white', height: 60,shadowColor: null,
                        shadowOffset: null,
                        shadowOpacity: null,
                        shadowRadius: null,
                        elevation: null}}>
                        <Left><Text style = {{color: 'black'}}>Fixed</Text></Left>
                        <Right>
                            <Text style = {{color: '#2874F0'}}>More</Text>
                        </Right>
                    </Header>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain', marginRight: 10}}/>
                            <Body>
                            <Text style = {{color: 'black'}}>0.50% p.a.</Text>
                            <Text note>Period: 12 month</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain',marginRight: 10}} />
                            <Body>
                            <Text style = {{color: 'black'}}>0.25% p.a.</Text>
                            <Text note>Period: 12 month</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                            <Body>
                            <Text style = {{color: 'black'}}>0.95% p.a.</Text>
                            <Text note>Period: 48 month</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../assets/icn_dbs.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                            <Body>
                            <Text style = {{color: 'black'}}>0.35% p.a.</Text>
                            <Text note>Period: 12 month</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <ListItem itemDivider />
                    <Header style = {{backgroundColor: 'white', height: 60,shadowColor: null,
                        shadowOffset: null,
                        shadowOpacity: null,
                        shadowRadius: null,
                        elevation: null}}>
                        <Left><Text style = {{color: 'black'}}>Stocks</Text></Left>
                        <Right>
                            <Text style = {{color: '#2874F0'}}>More</Text>
                        </Right>
                    </Header>
                    <List>
                        <ListItem>
                            <Left><Text style = {{color: 'green', fontSize: 30}}>21333.00</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>Dow Jones mini</Text>
                            <Text note>+13.00&nbsp;&nbsp;+0.06%</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'red', fontSize: 30}}>2431.00</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>S&P 500 mini</Text>
                            <Text note>-1.00&nbsp;&nbsp;-0.04%</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'green', fontSize: 30}}>7394.50</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>FTSE100Future</Text>
                            <Text note>+32.50&nbsp;&nbsp;+0.44%</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <ListItem itemDivider />
                    <ListItem flexDirection = 'row' justifyContent = "space-between">
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_bonds.png')} style = {{width: 25, height: 25, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Salaries</Text>
                        </View>
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20,justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_trade.png')} style = {{width: 25, height: 25, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Plan</Text>
                        </View>
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20,justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_insurance.png')} style = {{width: 25, height: 25, resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Credit</Text>
                        </View>
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20,justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_loans.png')} style = {{width: 25, height: 25, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Loans</Text>
                        </View>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    text_normal: {
        color: 'black',
        fontSize: 13
    },
    text_highlighted: {
        color: '#2874F0',
        fontSize: 13
    }
});
