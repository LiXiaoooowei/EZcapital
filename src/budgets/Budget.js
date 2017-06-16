import React, {Component} from "react";
import {View, Image, TouchableHighlight} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, Text, List, ListItem, Thumbnail, Card, CardItem, Fab} from "native-base";
import PercentageCircle from 'react-native-percentage-circle';
import renderIf from './renderif';

export default class Pay extends Component {
    constructor() {
        super();
        this.state = {
            showDetail: true,
            active: false
        }
        this.toggleVisibility=this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        var show = !this.state.showDetail;
        this.setState({
            showDetail: show
        });
    }
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
                    <Title>Budgets</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style = {{backgroundColor: 'lightgray', height: 60, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Icon name = "ios-arrow-back-outline" style = {{color: 'white', marginLeft: 50, marginTop: 15}}/>
                        <Title style = {{color: 'white', justifyContent: 'center', marginTop: 15}}>Febrary, 2017</Title>
                        <Icon name = "ios-arrow-forward-outline" style = {{color: 'white', marginRight: 50, marginTop: 15}}/>
                    </View>
                    {renderIf(this.state.showDetail)(<View style = {{marginTop: 50, marginBottom: 75}}>
                        <View style = {{flexDirection: 'row', marginLeft: 50}}>
                            <PercentageCircle radius={35} percent={50} color={"#666D6A"} innerColor="#5cb85c" borderWidth={5}>
                                <Icon name = "nutrition" style = {{color: 'white'}}></Icon>
                                <Text style = {{color: 'white'}}>S$230</Text>
                            </PercentageCircle>
                            <PercentageCircle radius={70} percent={80} color={"#666D6A"} innerColor="#5cb85c" borderWidth={5}>
                                <Icon name = "pizza" style = {{color: 'white'}}></Icon>
                                <Text style = {{color: 'white'}}>Food + Dining</Text>
                                <Text style = {{color: 'white'}}>-------------------</Text>
                                <Text style = {{color: 'white'}}>S$300</Text>
                            </PercentageCircle>
                            <PercentageCircle radius={55} percent={50} color={"#666D6A"} innerColor="#5cb85c" borderWidth={5}>
                                <Icon name = "nutrition" style = {{color: 'white'}}></Icon>
                                <Text style = {{color: 'white'}}>S$300</Text>
                            </PercentageCircle>
                        </View>
                        <View style = {{flexDirection: 'row', marginLeft: 100}}>
                            <PercentageCircle radius={55} percent={70} color={"#666D6A"} innerColor="#f0ad4e" borderWidth={5}>
                                <Icon name = "cart" style = {{color: 'white'}}></Icon>
                                <Text style = {{color: 'white'}}>S$69 left</Text>
                            </PercentageCircle>
                            <PercentageCircle radius={30} percent={70} color={"#666D6A"} innerColor="#f0ad4e" borderWidth={5}>
                                <Icon name = "bicycle" style = {{color: 'white'}}></Icon>
                            </PercentageCircle>
                        </View>
                        <View style = {{flexDirection: 'row', marginLeft: 205, marginTop: -50}}>
                            <PercentageCircle radius={30} percent={70} color={"#666D6A"} innerColor="#f0ad4e" borderWidth={5}>
                                <Icon name = "paper-plane" style = {{color: 'white'}}></Icon>
                            </PercentageCircle>
                            <PercentageCircle radius={40} percent={70} color={"#666D6A"} innerColor="#d9534f" borderWidth={5}>
                                <Icon name = "paper" style = {{color: 'white'}}></Icon>
                                <Text style = {{color: 'white'}}>S$69 left</Text>
                            </PercentageCircle>
                        </View>
                        <View style = {{marginLeft: 140, marginTop: -30}}>
                            <PercentageCircle radius={55} percent={0} color={"#666D6A"} innerColor="#d9534f" borderWidth={5}>
                                <Icon name = "body" style = {{color: 'white'}}></Icon>
                                <Text style = {{color: 'white'}}>S$300</Text>
                            </PercentageCircle>
                        </View>
                    </View>)}
                    <TouchableHighlight onPress={this.toggleVisibility}>
                        <Header style = {{backgroundColor: 'lightgray', height: 60}}>
                            <Right>
                                <Title style = {{color: 'white'}}>DETAILS</Title>
                                {renderIf(this.state.showDetail)(
                                    <Icon name = "ios-arrow-up" style = {{color: 'white', marginLeft: 10}}/>)}
                                {renderIf(!this.state.showDetail)(
                                    <Icon name = "ios-arrow-down" style = {{color: 'white', marginLeft: 10}}/>)}
                            </Right>
                        </Header>
                    </TouchableHighlight>
                    {renderIf(!this.state.showDetail)(
                        <View>
                            <View style = {{height: 20, flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10, marginTop: 10}}>
                                <Icon name = "bicycle" style = {{color: '#f0ad4e', marginRight: 5, marginTop: -5}}></Icon>
                                <View style = {{backgroundColor: '#f0ad4e', width: 155, height: 20}}></View>
                                <View style = {{backgroundColor: '#E6E9E8', width: 170, height: 20}}><Text style = {{fontSize:10}}>S$200 spent</Text></View>
                                <Text style = {{fontSize:10}}> S$400 set</Text>
                            </View>
                            <View style = {{height: 20, flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10, marginTop: 10}}>
                                <Icon name = "pizza" style = {{color: '#5cb85c', marginRight: 5,  marginTop: -5}}></Icon>
                                <View style = {{backgroundColor: '#5cb85c', width: 105, height: 20}}></View>
                                <View style = {{backgroundColor: '#E6E9E8', width: 220, height: 20}}><Text style = {{fontSize:10}}>S$150 spent</Text></View>
                                <Text style = {{fontSize:10}}> S$350 set</Text>
                            </View>
                            <View style = {{height: 20, flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10, marginTop: 10}}>
                                <Icon name = "body" style = {{color: '#d9534f', marginRight: 5, marginTop: -5}}></Icon>
                                <View style = {{backgroundColor: '#d9534f', width: 55, height: 20}}></View>
                                <View style = {{backgroundColor: '#E6E9E8', width: 270, height: 20}}><Text style = {{fontSize:10}}>S$45 spent</Text></View>
                                <Text style = {{fontSize:10}}> S$200 set</Text>
                            </View>
                            <View>
                                <Text style = {{fontSize: 30, fontStyle: 'italic',fontWeight: '100', fontFamily: 'source sans pro', textAlign: 'center', marginTop: 30}}>Spending History</Text>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../assets/icn_greendot.png')} style = {{width: 20, height: 20}}/>
                                    </Left>
                                    <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../assets/icn_greendot.png')} style = {{width: 20, height: 20}}/>
                                    </Left>
                                    <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../assets/icn_reddot.png')} style = {{width: 20, height: 20}}/>
                                    </Left>
                                    <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../assets/icn_orangedot.png')} style = {{width: 20, height: 20}}/>
                                    </Left>
                                    <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../assets/icn_greendot.png')} style = {{width: 20, height: 20}}/>
                                    </Left>
                                    <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../assets/icn_reddot.png')} style = {{width: 20, height: 20}}/>
                                    </Left>
                                    <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../assets/icn_orangedot.png')} style = {{width: 20, height: 20}}/>
                                    </Left>
                                    <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../assets/icn_orangedot.png')} style = {{width: 20, height: 20}}/>
                                    </Left>
                                    <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../assets/icn_reddot.png')} style = {{width: 20, height: 20}}/>
                                    </Left>
                                    <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../assets/icn_reddot.png')} style = {{width: 20, height: 20}}/>
                                    </Left>
                                    <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Doing what you like will always keep you happy . .</Text>
                                    </Body>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                            </View>
                            <View>
                                <Fab
                                    active={this.state.active}
                                    direction="left"
                                    containerStyle={{ marginRight: 10, marginBottom: 20  }}
                                    style={{ backgroundColor: '#5067FF' }}
                                    position="bottomRight"
                                    onPress={() => this.setState({ active: !this.state.active })}>
                                    <Icon name = "clipboard"></Icon>
                                    <Button style={{ backgroundColor: '#34A34F',marginBottom: 20 }}>
                                        <Icon name="ios-add" />
                                    </Button>
                                    <Button style={{ backgroundColor: '#3B5998' ,marginBottom: 20}}>
                                        <Icon name="color-filter" />
                                    </Button>
                                </Fab>
                            </View>
                        </View>
                    )}
                </Content>
            </Container>
        );
    }
}
const BUTTON_WIDTH = 60;
const BUTTON_RADIUS = BUTTON_WIDTH/2.0;
const ICON_SIZE = 50;