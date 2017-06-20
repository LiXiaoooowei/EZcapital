import React from "react";
import Dimensions from 'Dimensions';
import {View,Image} from 'react-native';
import {Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, List, ListItem, Thumbnail} from "native-base";
import {NavigationActions} from 'react-navigation';

export default class EditScreenOne extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style = {{"backgroundColor": "#2E4053"}}>
                <Left>
                    <Button transparent onPress={() => navigation.dispatch(NavigationActions.back())}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>Quick Pay</Title>
                </Body>
                <Right />
            </Header>
        )
    });
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <Content>
                        <Card style = {{alignItems: 'center', justifyContent: 'center', marginTop: (height-128-128-width/5-width/2)/2, width: width*7/8, marginLeft: width/16, borderRadius: 10}}>
                            <CardItem>
                                <Image source = {require('../../assets/icn_barcode.png')} style = {{resizeMode: 'contain', height: width/5, width: width*4/5}}/>
                            </CardItem>
                            <CardItem>
                                <Text>2898 ****** View Numbers</Text>
                            </CardItem>
                            <CardItem>
                                <Image source = {require('../../assets/icn_qrcode.png')} style = {{resizeMode: 'contain', height: width/2, width: width/2}}/>
                            </CardItem>
                            <CardItem>
                                <View style = {{flexDirection: 'row'}}>
                                <Image source = {require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain', height: width/20, width: width/10}}/>
                                    <Text> Standard Chartered Card (3167)</Text>
                                    <Icon name = "ios-arrow-forward" style = {{marginLeft: 10}}/>
                                </View>
                            </CardItem>
                        </Card>
                </Content>
            </Container>
        );
    }
}
