import React, {Component} from "react";
import {View} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, Text} from "native-base";

export default class Pay extends Component {
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
                    <Title>Pay</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style = {{flex: 1, flexDirection: 'row', marginTop: 10, marginLeft: 5}}>
                        <Button primary style = {{"width": BUTTON_WIDTH, "height": BUTTON_WIDTH, "borderRadius": BUTTON_RADIUS}}>
                            <Icon name = "pizza" size={ICON_SIZE}/>
                        </Button>
                        <Button success style = {{"width": BUTTON_WIDTH, "height": BUTTON_WIDTH, "borderRadius": BUTTON_RADIUS}}>
                            <Icon name = "bicycle" size={ICON_SIZE}/>
                        </Button>
                        <Button info style = {{"width": BUTTON_WIDTH, "height": BUTTON_WIDTH, "borderRadius": BUTTON_RADIUS}}>
                            <Icon name = "medkit" size={ICON_SIZE}/>
                        </Button>
                        <Button warning style = {{"width": BUTTON_WIDTH, "height": BUTTON_WIDTH, "borderRadius": BUTTON_RADIUS}}>
                            <Icon name = "paper-plane" size={ICON_SIZE} />
                        </Button>
                        <Button danger style = {{"width": BUTTON_WIDTH, "height": BUTTON_WIDTH, "borderRadius": BUTTON_RADIUS}}>
                            <Icon name = "person" size={ICON_SIZE}/>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
const BUTTON_WIDTH = 70;
const BUTTON_RADIUS = BUTTON_WIDTH/2.0;
const ICON_SIZE = 50;