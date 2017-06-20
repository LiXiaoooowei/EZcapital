import React from "react";
import Dimensions from 'Dimensions';
import {View,Image} from 'react-native';
import {Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, List, ListItem, Thumbnail} from "native-base";
import {NavigationActions} from 'react-navigation';

export default class EditScreenOne extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style = {{"backgroundColor": "#2E4053"}}>
                <Left>
                    <Button transparent onPress={() => navigation.dispatch(NavigationActions.back())}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>Quick Pay</Title>
                </Body>
                <Right />
            </Header>
        )
    });
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <Content>
                    <Text>Quick pay scan</Text>
                </Content>
            </Container>
        );
    }
}
