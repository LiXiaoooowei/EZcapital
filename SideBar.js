import React from "react";
import {Image} from "react-native";
import {Button, Text, Container, List, ListItem, Content, Icon} from "native-base";

const routes = ["Home", "Transfer", "Budgets", "Pay", "Personal Finance", "Promotion", "Settings"];

export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image
                        source={require('./assets/slide_bg.png')}
                        style={{
                            height: 140,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Image
                            square
                            style={{ position: "absolute", left: 140, top: 35, width: 80, height: 70}}
                            source={require('./assets/icn_logo.png')}
                        />
                    </Image>
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}
                                >
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
