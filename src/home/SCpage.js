import React from "react";

import {Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, H1} from "native-base";

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
                <Title>Standard Chartered Card</Title>
                </Body>
                <Right />
            </Header>
        )
    });
    render() {
        return (
            <Container>
                <Content padder>
                    <Text>DBS</Text>
                </Content>
            </Container>
        );
    }
}
