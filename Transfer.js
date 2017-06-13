import React from "react";

import {Container, Body, Header, Left, Right, Icon, Title, Button,} from "native-base";

export default class Profile extends React.Component {

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
                    <Title>Transfer</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}
