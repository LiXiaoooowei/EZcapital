import React, {Component} from "react";
import {View, Image, TouchableHighlight} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, Text, List, ListItem, Thumbnail, Item, Input} from "native-base";


export default class Promotion extends Component {

    render() {
        return (
            <Container>
                <Header style = {{"backgroundColor": "#2E4053"}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Promotion</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View>
                        <Header searchBar rounded style = {{backgroundColor: 'white'}}>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Search" />
                                <Icon name="ios-people" />
                            </Item>
                            <Button transparent style = {{borderColor: 'darkgray'}}>
                                <Text>Search</Text>
                            </Button>
                        </Header>
                        <List>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain'}}/>
                                <Body>
                                <Text>2017 Shop, Shake, Win Promotion</Text>
                                <Text note>Stand to win a prize worth up to $150 each time you play the Shop, Shake</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_uber.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Free First Uber Ride</Text>
                                <Text note>Free first uber Ride of up to $15</Text>
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
                                <Thumbnail square size={80} source={require('../../assets/icn_starbucks.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>1-For-1 Promotion</Text>
                                <Text note>1-For-1 Promotion from 1 pm to 7 pm today</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Hotels.com Offer</Text>
                                <Text note>Up to 12%  off at Hotels.com with your credit cards</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_taobao.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>SALE! Up to 50% Off</Text>
                                <Text note>Buy women fashion with up to 50% off</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Online Exclusive Promotion</Text>
                                <Text note>Be rewarded with cashback and more with OCBC Credit Cards bundle deal!</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_airbnb.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Promotion Code</Text>
                                <Text note>$10 off with promotion code #EZCAPITAL</Text>
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
                                <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>General</Text>
                                <Text note>Enjoy up to 3.5% Cash Back on all purchases</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </View>
                </Content>
            </Container>
        );
    }
}
