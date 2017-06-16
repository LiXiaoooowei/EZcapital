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
                                <Thumbnail square size={80} source={require('./assets/icn_ocbc.png')} style = {{resizeMode: 'contain'}}/>
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_ocbc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_citi.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_dbs.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_sc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_uob.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_hsbc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_ocbc.png')} style = {{resizeMode: 'contain'}}/>
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_ocbc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_citi.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_dbs.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_sc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_uob.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('./assets/icn_hsbc.png')} style = {{resizeMode: 'contain'}} />
                                <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </View>
                </Content>
            </Container>
        );
    }
}
