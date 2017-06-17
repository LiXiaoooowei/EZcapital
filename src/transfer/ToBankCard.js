import React from "react";
import Dimensions from 'Dimensions';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Text, Input, Form, Item, Label, ListItem} from "native-base";

export default class ToBankCard extends React.Component {

    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <Form>
                    <Item floatingLabel>
                        <Label>Cardholder's Name</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Card No.</Label>
                        <Input />
                    </Item>
                    <ListItem fixedLabel>
                        <Text>Bank</Text>
                        <Right>
                            <Icon name = "ios-arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem itemDivider />
                    <Item>
                        <Left><Text>Amount</Text></Left>
                        <Input />
                        <Right>
                            <Text style = {{color: '#2874F0'}}>Limit   </Text>
                        </Right>
                    </Item>
                </Form>
                <ListItem itemDivider />
                <Button block style = {{marginLeft: width/20, marginRight: width/20}}><Text>Transfer</Text></Button>
            </Container>
        );
    }
}
