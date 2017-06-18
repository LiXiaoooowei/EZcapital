import React from "react";
import Dimensions from 'Dimensions';
import {View} from 'react-native';
import {Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, List, ListItem} from "native-base";
import  MapView from 'react-native-maps';

export default class EditScreenOne extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style = {{"backgroundColor": "#2E4053"}}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>OCBC Card</Title>
                </Body>
                <Right />
            </Header>
        )
    });
    constructor() {
        super();
        this.state = {
            latitude: 1.2966,
            longitude: 103.7764
        }
    }
    componentWiLlMount() {
        navigator.geolocation.getWatchPosition((position)=> {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        })
    }
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <Content>
                    <View style = {{flexDirection: 'row', height: height/5}}>
                        <View style = {{
                            width: width/2,
                            borderColor: 'lightgray',
                            backgroundColor: 'white',
                            borderWidth: 0.5
                        }}>
                            <Text style = {{color: 'darkgray', marginLeft: 10, marginTop: 10}}>Debit</Text>
                            <Text style = {{color: 'red',justifyContent: 'center', alignSelf: 'center', fontSize: 40, marginTop: 20}}>-S$1,030</Text>
                        </View>
                        <View style = {{
                            width: width/2,
                            borderColor: 'lightgray',
                            backgroundColor: 'white',
                            borderWidth: 0.5
                        }}>
                            <Text style = {{color: 'darkgray', marginLeft: 10, marginTop: 10}}>Credit</Text>
                            <Text style = {{color: 'green',justifyContent: 'center', alignSelf: 'center', fontSize: 40, marginTop: 20}}>+S$8,935</Text>
                        </View>
                    </View>
                    <View style = {{height: height/15, backgroundColor: 'white'}}>
                        <Body><Text style = {{marginTop: height/50}}>View Transactions History</Text></Body>
                    </View>
                    <View style = {{flexDirection: 'row', height: height/15}}>
                        <View style = {{
                            width: width*3/7,
                            borderColor: 'lightgray',
                            backgroundColor: 'white',
                            borderWidth: 0.5,
                            flexDirection: 'row'
                        }}>
                            <Left>
                                <Text style = {{color: 'darkgray'}}>1 JUN</Text>
                            </Left>
                            <Right><Icon name = "calendar"/></Right>
                        </View>
                        <View style = {{
                            width: width*3/7,
                            borderColor: 'lightgray',
                            backgroundColor: 'white',
                            borderWidth: 0.5,
                            flexDirection: 'row'
                        }}>
                            <Left>
                                <Text style = {{color: 'darkgray'}}>18 JUN</Text>
                            </Left>
                            <Right><Icon name = "calendar"/></Right>
                        </View>
                        <Button light style = {{width: width/7, height: height/15}}>
                            <Body><Text note style = {{color: 'black'}}>Go</Text></Body>
                        </Button>
                    </View>
                    <View>
                        <ListItem style = {{backgroundColor: 'white', marginLeft: 0}}>
                            <Left>
                                <Text note>16 Jun 2017    AWL</Text>
                            </Left>
                            <Body>
                            <Text note> 09696387, NUS REMIX BR 1</Text>
                            </Body>
                            <Right>
                                <Text note>S$100</Text>
                            </Right>
                        </ListItem>
                        <ListItem style = {{backgroundColor: 'white',marginLeft: 0}}>
                            <Left>
                                <Text note>15 Jun 2017    POS</Text>
                            </Left>
                            <Body>
                            <Text note> NANYANG MART PTE LTD</Text>
                            </Body>
                            <Right>
                                <Text note>S$7.5</Text>
                            </Right>
                        </ListItem>
                        <ListItem style = {{backgroundColor: 'white',marginLeft: 0}}>
                            <Left>
                                <Text note>15 JUN 2017    MST</Text>
                            </Left>
                            <Body>
                            <Text note> BURGER KING-KENT RID SI NG</Text>
                            </Body>
                            <Right>
                                <Text note>S$5.5</Text>
                            </Right>
                        </ListItem>
                        <ListItem style = {{backgroundColor: 'white',marginLeft: 0}}>
                            <Left>
                                <Text note>13 JUN 2017    MST</Text>
                            </Left>
                            <Body>
                            <Text note> WATSON'S SI NG </Text>
                            </Body>
                            <Right>
                                <Text note>S$7.8</Text>
                            </Right>
                        </ListItem>
                    </View>
                    <MapView style = {{width: width, height: height/3}} initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}></MapView>
                </Content>
            </Container>
        );
    }
}
