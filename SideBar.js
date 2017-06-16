import React from "react";
import {Image,View} from "react-native";
import {Button, Text, Container, List, ListItem, Content, Icon} from "native-base";

const routes = ["Home", "Transfer", "Budgets", "Pay", "Personal Finance", "Promotion", "Settings"];

export default class SideBar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={{height: 140,justifyContent: "center", alignItems: "center", backgroundColor: "#2E4053"}}>
                        <Image style={{ width: 70, height: 70, borderRadius: 35}} source={require('./assets/icn_pikachu.png')}/>
                    </View>
                    <View style={{height: 30,justifyContent: "center", alignItems: "center", backgroundColor: "#2E4053",marginTop: -30}}>
                        <Text style = {{color: 'white'}}> Xiaowei</Text>
                    </View>
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
