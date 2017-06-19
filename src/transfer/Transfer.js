import React from "react";
import {TouchableHighlight, View} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button, Content, ListItem, Thumbnail, Item, Input, Text} from "native-base";
import Dimensions from 'Dimensions';

export default class Transfer extends React.Component {

    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <Content>
                    <Header searchBar rounded style = {{backgroundColor: 'white'}}>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" />
                        </Item>
                        <Button transparent style = {{borderColor: 'darkgray'}}>
                            <Text>Search</Text>
                        </Button>
                    </Header>

                            <ListItem style = {{backgroundColor: 'white', marginLeft: 0}}>
                        <Thumbnail square size={80} source={require('../../assets/icn_ppl.png')} style = {{resizeMode: 'contain', marginLeft: 5}}/>
                        <Body>
                        <Text>To My Friends</Text>
                        </Body>
                            </ListItem>
                    <ListItem style = {{backgroundColor: 'white', marginLeft: 0}}>
                        <Thumbnail square size={80} source={require('../../assets/icn_logowhite.png')} style = {{resizeMode: 'contain', marginLeft: 5}} />
                        <Body>
                        <Text>To EZcapital Account</Text>
                        </Body>
                    </ListItem>

                    <ListItem style = {{backgroundColor: 'white', marginLeft: 0}}>
                        <Thumbnail square size={80} source={require('../../assets/icn_bankcard.png')} style = {{resizeMode: 'contain', marginLeft: 5}} />
                        <Body>
                        <Button onPress={() => this.props.navigation.navigate("ToBankCard")} transparent style = {{width: width-5-80}}>
                        <Text style = {{color: 'black'}}>To Bank Card</Text>
                        </Button>
                        </Body>
                    </ListItem>

                    <ListItem itemDivider />
                    <Header noShadow style = {{backgroundColor: 'white'}}><Left><Text style = {{color: 'black'}}>Recents</Text></Left></Header>
                    <ListItem style = {{backgroundColor: 'white', marginLeft: 0}}>
                        <Thumbnail square size={80} source={require('../../assets/icn_friend1.png')} style = {{resizeMode: 'contain', marginLeft: 5}} />
                        <Body>
                        <Text>Emily the racoon</Text>
                        <Text note>+65 ****0234</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}
Transfer.navigationOptions = ({ navigation }) => ({
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
            <Title>Transfer</Title>
            </Body>
            <Right />
        </Header>
    )
});
