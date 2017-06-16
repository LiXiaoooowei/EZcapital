import React, {Component} from "react";
import {View, Image, TouchableHighlight} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, Text, List, ListItem, Thumbnail, Switch} from "native-base";


export default class Settings extends Component {

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
                    <Title>Settings</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <ListItem itemDivider />
                    <ListItem>
                        <Body>
                        <Text>Manage Account</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>Security Center</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>Phone No.</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                        <Body>
                        <Text>Payment Settings</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>Password</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>Privacy</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>General</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>Notification bar</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                        <Body>
                        <Text>Help and Feedback</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>About</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem itemDivider />
                    <Button full style = {{
                        borderColor: 'white',
                        backgroundColor: 'white',
                        elevation: 0,
                        shadowColor: null,
                        shadowOffset: null,
                        shadowRadius: null,
                        shadowOpacity: null
                    }}>
                        <Text style = {{color: 'black'}}>Log Out</Text>
                    </Button>
                    <ListItem itemDivider />
                </Content>
            </Container>
        );
    }
}
