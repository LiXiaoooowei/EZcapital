import React, {Component} from "react";
import {View, Image, TouchableHighlight, Text,StyleSheet} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, List, ListItem, Thumbnail, Footer} from "native-base";
import Dimensions from 'Dimensions';
import renderIf from '../budgets/renderif';


export default class LowriskInvestment extends Component {
    constructor() {
        super();
        this.state = {
            btn1active: true,
            btn2active: false,
            btn3active: false,
            btn4active: false
        }
        this.toggleBtn1Status = this.toggleBtn1Status.bind(this);
        this.toggleBtn2Status = this.toggleBtn2Status.bind(this);
        this.toggleBtn3Status = this.toggleBtn3Status.bind(this);
        this.toggleBtn4Status = this.toggleBtn4Status.bind(this);
    }
    toggleBtn1Status() {
        this.setState({
            btn1active:true,
            btn2active:false,
            btn3active:false,
            btn4active:false
        });
    }
    toggleBtn2Status() {
        this.setState({
            btn1active:false,
            btn2active:true,
            btn3active:false,
            btn4active:false
        });
    }
    toggleBtn3Status() {
        this.setState({
            btn1active:false,
            btn2active:false,
            btn3active:true,
            btn4active:false
        });
    }
    toggleBtn4Status() {
        this.setState({
            btn1active:false,
            btn2active:false,
            btn3active:false,
            btn4active:true
        });
    }
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
                <ListItem flexDirection = 'column' justifyContent = "space-between">
                    <View flexDirection = "column">
                    <Image source = {require('../../assets/icn_bonds.png')} style = {{width: 30, height: 30, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                    <Text note>Bonds</Text>
                    </View>
                    <View flexDirection = "column">
                        <Image source = {require('../../assets/icn_trade.png')} style = {{width: 30, height: 30, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                        <Text note>Trade</Text>
                    </View>
                    <View flexDirection = "column">
                        <Image source = {require('../../assets/icn_insurance.png')} style = {{width: 30, height: 30, resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center'}}></Image>
                        <Text note>Insurance</Text>
                    </View>
                    <View flexDirection = "column">
                        <Image source = {require('../../assets/icn_loans.png')} style = {{width: 30, height: 30, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                        <Text note>Loans</Text>
                    </View>
                    <View flexDirection = "column">
                        <Image source = {require('../../assets/icn_securities.png')} style = {{width: 30, height: 30, resizeMode: 'contain',justifyContent: 'center', alignSelf: 'center'}}></Image>
                        <Text note>Securities</Text>
                    </View>
                </ListItem>
                <Content style = {{marginTop: 20}}>
                    <View><Body><Text style = {{justifyContent: 'center', color: 'black'}}>Profit Ranking</Text></Body></View>
                    <View flexDirection = 'row' style = {{width: width, height: 50}}>
                        <Button transparent style = {{width: width/4, height: 50}} onPress={this.toggleBtn1Status}>
                            <Body>
                            <Text style = {this.state.btn1active? styles.text_highlighted: styles.text_normal}>All</Text>
                            <Text note style = {{fontSize: 10}}> 5.30%</Text>
                            </Body>
                        </Button>
                        <Button transparent style = {{width: width/4,height: 50}} onPress={this.toggleBtn2Status}>
                            <Body>
                            <Text style = {this.state.btn2active? styles.text_highlighted: styles.text_normal}> 1 month </Text>
                            <Text note style = {{fontSize: 10}}> 4.55%</Text>
                            </Body>
                        </Button>
                        <Button transparent style = {{width: width/4,height: 50}} onPress={this.toggleBtn3Status}>
                            <Body>
                            <Text style = {this.state.btn3active? styles.text_highlighted: styles.text_normal}>1-6 months</Text>
                            <Text note style = {{fontSize: 10}}> 4.85%</Text>
                            </Body>
                        </Button>
                        <Button transparent style = {{width: width/4,height: 50}} onPress={this.toggleBtn4Status}>
                            <Body>
                            <Text style = {this.state.btn4active? styles.text_highlighted: styles.text_normal}> > 6 months</Text>
                            <Text note style = {{fontSize: 10}}> 5.30%</Text>
                            </Body>
                        </Button>
                    </View>
                    {renderIf(this.state.btn1active)(
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
                                <ListItem>
                                    <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                    <Body>
                                    <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Thumbnail square size={80} source={require('../../assets/icn_uob.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                    <Body>
                                    <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                    <Body>
                                    <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}}/>
                                    <Body>
                                    <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
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
                                <ListItem>
                                    <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                    <Body>
                                    <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Thumbnail square size={80} source={require('../../assets/icn_uob.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                    <Body>
                                    <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                    <Body>
                                    <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                    <Text note>Its time to build a difference . .</Text>
                                    </Body>
                                </ListItem>
                            </List>
                    )}
                    {renderIf(this.state.btn2active)(
                        <List>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}}/>
                                <Body>
                                <Text style = {{color: 'black'}}>1 months</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
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
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_uob.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}}/>
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
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
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_uob.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                        </List>
                    )}
                    {renderIf(this.state.btn3active)(
                        <List>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}}/>
                                <Body>
                                <Text style = {{color: 'black'}}>1-6 months</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
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
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_uob.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}}/>
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
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
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_uob.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                        </List>
                    )}
                    {renderIf(this.state.btn4active)(
                        <List>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}}/>
                                <Body>
                                <Text style = {{color: 'black'}}>more than 6 months</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
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
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_uob.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}}/>
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
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
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_uob.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../assets/icn_hsbc.png')} style = {{resizeMode: 'contain', marginRight: 10}} />
                                <Body>
                                <Text style = {{color: 'black'}}>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                        </List>
                    )}
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