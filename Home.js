import React from "react";
import { Button, Container, Body, Header, Title, Left, Icon, Right} from "native-base";

export default class HomeScreen extends React.Component {
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
                    <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        );
    }
}
