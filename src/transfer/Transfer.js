import React from "react";
import {Container, Body, Header, Left, Right, Icon, Title, Button, Content} from "native-base";
import BankCard from "./ToBankCard";

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
                <Content>
                    <BankCard />
                </Content>
            </Container>
        );
    }
}
