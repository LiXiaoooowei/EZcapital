import React, {Component} from "react";
import {View, Image, ScrollView} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, Text, List, ListItem, Thumbnail, Footer} from "native-base";
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Today from './PF_Today';
import Products from './PF_Products';
import Account from './PF_MyAccount';
export default class PersonalFinance extends Component {

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
                    <Title>Personal   Finance</Title>
                    </Body>
                    <Right />
                </Header>
                    <ScrollableTabView style = {{backgroundColor: 'white', borderTopColor: 'lightgray'}} tabBarPosition = "bottom" renderTabBar={()=><ScrollableTabBar/>}>
                        <Today tabLabel="Today" />
                        <Products tabLabel="Products" />
                        <Account tabLabel="My Account" />
                    </ScrollableTabView>
            </Container>
        );
    }
}
