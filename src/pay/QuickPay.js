import React from "react";
import Dimensions from 'Dimensions';
import {View, Image} from 'react-native';
import {Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, List, ListItem, Thumbnail} from "native-base";


export default class EditScreenOne extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style = {{"backgroundColor": "#2E4053"}}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
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
    constructor() {
        super();

    }

    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <Content>

                </Content>
            </Container>
        );
    }
}
