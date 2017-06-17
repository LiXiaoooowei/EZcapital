import React, {Component} from "react";
import {View, Image, TouchableHighlight, Text,StyleSheet} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, List, ListItem, Thumbnail} from "native-base";
import Dimensions from 'Dimensions';
import renderIf from '../budgets/renderif';


export default class LowriskInvestment extends Component {
    constructor() {
        super();
        this.state = {
            showIndex: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
        this.setState({
            showIndex: !this.state.showIndex
        });
    }
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <Content>
                    <ListItem itemDivider />
                    <TouchableHighlight onPress={this.toggleVisibility}>
                        <View>
                            {renderIf(!this.state.showIndex)(
                                <Header style = {{backgroundColor: 'white', height: 60,shadowColor: null,
                                    shadowOffset: null,
                                    shadowOpacity: null,
                                    shadowRadius: null,
                                    elevation: null}}>
                                <Left><Text style = {{color: 'black'}}>Index</Text></Left>
                                <Body flexDirection='row' justifyContent="space-between">
                                <Text>1810.05   </Text><Text>-30.45   </Text><Text>-0.30%</Text>
                                </Body>
                                <Right>
                                <Icon name = "ios-arrow-down" style = {{color: 'darkgray', marginLeft: 10}}/>
                                </Right>
                                </Header>
                                )}
                        {renderIf(this.state.showIndex)(
                            <Header style = {{backgroundColor: 'white', height: 60,shadowColor: null,
                                shadowOffset: null,
                                shadowOpacity: null,
                                shadowRadius: null,
                                elevation: null}}>
                                <Left><Text style = {{color: 'black'}}>Stocks</Text></Left>
                                <Right>
                                    <Icon name = "ios-arrow-up" style = {{color: 'darkgray', marginLeft: 10}}/>
                                </Right>
                            </Header>
                        )}
                        </View>
                    </TouchableHighlight>
                    {renderIf(this.state.showIndex)(
                        <List>
                            <ListItem>
                                <Left><Text style = {{color: 'black'}}>Index</Text></Left>
                                <Body><Text style = {{color: 'green'}}>3123.16</Text></Body>
                                <View flexDirection = "row" justifyContent="space-between">
                                    <Text style = {{color: 'green'}}>-9.32  </Text>
                                    <Text style = {{color: 'green'}}>-0.30%  </Text>
                                </View>
                            </ListItem>
                            <ListItem>
                                <Left><Text style = {{color: 'black'}}>Index</Text></Left>
                                <Body><Text style = {{color: 'green'}}>3123.16</Text></Body>
                                <View flexDirection = "row" justifyContent="space-between">
                                    <Text style = {{color: 'green'}}>-9.32  </Text>
                                    <Text style = {{color: 'green'}}>-0.30%  </Text>
                                </View>
                            </ListItem>
                            <ListItem>
                                <Left><Text style = {{color: 'black'}}>Index</Text></Left>
                                <Body><Text style = {{color: 'green'}}>3123.16</Text></Body>
                                <View flexDirection = "row" justifyContent="space-between">
                                    <Text style = {{color: 'green'}}>-9.32  </Text>
                                    <Text style = {{color: 'green'}}>-0.30%  </Text>
                                </View>
                            </ListItem>
                        </List>
                    )}
                    <ListItem itemDivider/>
                    <ListItem flexDirection = 'row' justifyContent = "space-between">
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_bonds.png')} style = {{width: 25, height: 25, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Bonds</Text>
                        </View>
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20,justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_trade.png')} style = {{width: 25, height: 25, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Trade</Text>
                        </View>
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20,justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_insurance.png')} style = {{width: 25, height: 25, resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Insurance</Text>
                        </View>
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20,justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_loans.png')} style = {{width: 25, height: 25, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Loans</Text>
                        </View>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem itemHeader><Left><Text style = {{color: 'black', fontSize: 30}}>Hot</Text></Left></ListItem>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}}/>
                            <Body>
                            <Text style = {{color: 'black'}}>All</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain',marginRight: 10}} />
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../assets/icn_citi.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../assets/icn_dbs.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <ListItem itemDivider />
                    <ListItem itemHeader>
                        <Left><Text style = {{color: 'black', fontSize: 30}}>Ranking</Text></Left>
                        <Right><Text style = {{color: '#2874F0'}}>All</Text></Right>
                    </ListItem>
                    <List>
                        <ListItem>
                            <Left><Text style = {{color: 'red', fontSize: 30}}>+31.10%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>All</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'red', fontSize: 30}}>+26.66%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'red', fontSize: 30}}>+24.43%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'red', fontSize: 30}}>+24.22%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    </List>

                    <ListItem itemDivider />
                    <ListItem itemHeader>
                        <Left><Text style = {{color: 'black', fontSize: 30}}>News</Text></Left>
                        <Right><Text style = {{color: '#2874F0'}}>More</Text></Right>
                    </ListItem>
                    <List>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>All</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    </List>

                </Content>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    text_normal: {
        color: 'black',
        fontSize: 13
    },
    text_highlighted: {
        color: '#2874F0',
        fontSize: 13
    }
});