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
                                <Left><Text style = {{color: 'black'}}>Dow Jones mini</Text></Left>
                                <Body><Text style = {{color: 'green'}}>21333.00</Text></Body>
                                <View flexDirection = "row" justifyContent="space-between">
                                    <Text style = {{color: 'green'}}>+13.00  </Text>
                                    <Text style = {{color: 'green'}}>+0.06%  </Text>
                                </View>
                            </ListItem>
                            <ListItem>
                                <Left><Text style = {{color: 'black'}}>S&P 500 mini</Text></Left>
                                <Body><Text style = {{color: 'green'}}>2431.00</Text></Body>
                                <View flexDirection = "row" justifyContent="space-between">
                                    <Text style = {{color: 'red'}}>-1.00  </Text>
                                    <Text style = {{color: 'red'}}>-0.04%  </Text>
                                </View>
                            </ListItem>
                            <ListItem>
                                <Left><Text style = {{color: 'black'}}>FTSE100Future</Text></Left>
                                <Body><Text style = {{color: 'green'}}>7394.50</Text></Body>
                                <View flexDirection = "row" justifyContent="space-between">
                                    <Text style = {{color: 'green'}}>+32.50  </Text>
                                    <Text style = {{color: 'green'}}>+0.44%  </Text>
                                </View>
                            </ListItem>
                        </List>
                    )}
                    <ListItem itemDivider/>
                    <ListItem flexDirection = 'row' justifyContent = "space-between">
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_bondswhite.png')} style = {{width: 25, height: 25, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Bonds</Text>
                        </View>
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20,justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_tradewhite.png')} style = {{width: 25, height: 25, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Trade</Text>
                        </View>
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20,justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_insurancewhite.png')} style = {{width: 25, height: 25, resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Insurance</Text>
                        </View>
                        <View flexDirection = "column">
                            <Button style = {{width: 40, height: 40, borderRadius: 20,justifyContent: 'center', alignSelf: 'center'}}>
                                <Image source = {require('../../assets/icn_loanswhite.png')} style = {{width: 25, height: 25, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                            </Button>
                            <Text note>Loans</Text>
                        </View>
                    </ListItem>
                    <ListItem itemDivider />
                    <ListItem itemHeader><Left><Text style = {{color: 'black', fontSize: 30}}>Hot</Text></Left></ListItem>
                    <List>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>Insurance Industry</Text>
                            <Text note>Last year <Text style = {{color: 'green'}}> +10.67%</Text></Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>IT Industry</Text>
                            <Text note>Last year <Text style = {{color: 'green'}}> +1.59%</Text></Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>Nonferrous Metal</Text>
                            <Text note>Last year <Text style = {{color: 'red'}}> -7.59%</Text></Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>Popular Funds</Text>
                            <Text note>Show More Details</Text>
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
                            <Left><Text style = {{color: 'green', fontSize: 30}}>+25.10%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>Shangri-La HKD</Text>
                            <Text note>Buy Now</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'green', fontSize: 30}}>+20.66%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>Uni-Asia Grp</Text>
                            <Text note>Buy Now</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'green', fontSize: 30}}>+16.43%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>SPH</Text>
                            <Text note>Buy Now</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text style = {{color: 'green', fontSize: 30}}>+14.22%</Text></Left>
                            <Body>
                            <Text style = {{color: 'black'}}>A-Smart</Text>
                            <Text note>Buy Now</Text>
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
                            <Text style = {{color: 'black'}}>COE premiums fall across the board</Text>
                            <Text note>CERTIFICATE of entitlement (COE) premiums ended lower across the board amid a weak vehicle market.</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>3-month SOR tumbles back to Nov levels even as US$ rallies</Text>
                            <Text note>THE three-month swap offer rate (SOR) has tumbled further amid a rally in the US dollar (USD), as the market grapples with what some see as possibly aggressive moves by the US central bank to shrink...</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>Australia dollar at 1-week low, NZ dollar falls on dairy auction </Text>
                            <Text note>The Australian dollar fell for a third straight session to a one-week trough on Wednesday as oil prices tumbled, while its New Zealand counterpart weakened after a disappointing dairy...</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                            <Text style = {{color: 'black'}}>Foreigners make US$27b blunder in missing Japan stock rally</Text>
                            <Text note>As the Nikkei 225 Stock Average rises toward its highest level in more than two decades, one group of investors has surprisingly missed out.</Text>
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