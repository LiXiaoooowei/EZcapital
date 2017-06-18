import React from "react";
import { Button, Container, Body, Header, Title, Left, Icon, Right, Content, DeckSwiper, Card, CardItem, Thumbnail, Text} from "native-base";
import {View, Image} from 'react-native';
import Dimensions from 'Dimensions';

export default class HomeScreen extends React.Component {

    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <Content>
                    <View>
                    <Image source = {require('../../assets/home_barchart.png')} style = {{width: width, height: width/1.65, resizeMode: 'contain'}}></Image>
                    <Image source = {require('../../assets/home_linechart.png')} style = {{width: width, height: width/1.50, resizeMode: 'contain'}}></Image>
                </View>
                    <View>
                        <Card style = {{alignItems: 'center', justifyContent: 'center'}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={ require('../../assets/icn_dbs.png')} style = {{resizeMode: 'contain'}} />
                                    <Body>
                                    <Text>DBS bank</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Image source = {require('../../assets/card_dbs.png')} style = {{resizeMode: 'contain', height: 220, width: 400}}/>
                            </CardItem>
                            <CardItem>
                                <Right>
                                <Button transparent onPress={() => this.props.navigation.navigate("DBS")}>
                                    <Icon name="star-half" />
                                    <Text>View Details</Text>
                                </Button>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style = {{alignItems: 'center', justifyContent: 'center'}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={ require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain'}} />
                                    <Body>
                                    <Text>Standard Chartered bank</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Image source = {require('../../assets/card_sc.png')} style = {{resizeMode: 'contain', height: 220, width: 400, justifyContent: 'center', alignItems: 'center'}}/>
                            </CardItem>
                            <CardItem>
                                <Right>
                                    <Button transparent onPress={() => this.props.navigation.navigate("SC")}t>
                                        <Icon name="star-half" />
                                        <Text>View Details</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style = {{alignItems: 'center', justifyContent: 'center'}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={ require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain'}} />
                                    <Body>
                                    <Text>OCBC bank</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Image source = {require('../../assets/card_ocbc.png')} style = {{resizeMode: 'contain', height: 220, width: 400, justifyContent: 'center', alignItems: 'center'}}/>
                            </CardItem>
                            <CardItem>
                                <Right>
                                    <Button transparent onPress={() => this.props.navigation.navigate("OCBC")}>
                                        <Icon name="star-half" />
                                        <Text>View Details</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style = {{alignItems: 'center', justifyContent: 'center'}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={ require('../../assets/icn_logolongwhite.png')} style = {{resizeMode: 'contain'}} />
                                    <Body>
                                    <Text>E-Wallet</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Image source = {require('../../assets/icn_logowhite.png')} style = {{resizeMode: 'contain', height: 100, width: 400, justifyContent: 'center', alignItems: 'center'}}/>
                            </CardItem>
                            <CardItem>
                                <Right>
                                    <Button transparent onPress={() => this.props.navigation.navigate("Ewallet")}>
                                        <Icon name="star-half" />
                                        <Text>View Details</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
            </Container>
        );
    }
}

HomeScreen.navigationOptions = ({ navigation }) => ({
    header: (
        <Header style = {{"backgroundColor": "#2E4053"}}>
            <Left>
                <Button
                    transparent
                    onPress={() => navigation.navigate("DrawerOpen")}
                >
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
            <Title>Home</Title>
            </Body>
            <Right>
                <Button iconLeft transparent>
                    <Icon name = "paper-plane"/>
                    <Text style = {{color: 'white'}}>Quick Pay</Text>
                </Button>
            </Right>
        </Header>
    )
});

