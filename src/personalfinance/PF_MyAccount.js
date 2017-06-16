import React, {Component} from "react";
import {View, Image, TouchableHighlight} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, Text, List, ListItem, Thumbnail, Footer} from "native-base";
import TableRow from './TableRow';

export default class PF_MyAccount extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <ListItem itemDivider />
                    <TableRow elem1 = "salary management" elem2 = "plans"/>
                    <TableRow elem1 = "pay loans" elem2 = "pay credit"/>
                    <ListItem itemDivider />
                    <TableRow elem1 = "fund investment" elem2 = "sales reminder"/>
                    <TableRow elem1 = "booking" elem2 = "crowd funding"/>
                    <ListItem itemDivider />
                    <TableRow elem1 = "red packets" elem2 = "activity center"/>
                    <ListItem itemDivider />
                    <ListItem>
                        <Body>
                        <Text>Help</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>Settings</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                        <Text>About financial management</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem>
                        <Body>
                        <Text>Feedback</Text>
                        </Body>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}
