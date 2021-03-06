import React, {Component} from "react";
import {View, Image, TouchableHighlight} from 'react-native';
import {Container, Body, Header, Left, Right, Icon, Title, Button,Content, Text, List, ListItem, Thumbnail, Footer} from "native-base";
import Dimensions from 'Dimensions';
import renderIf from '../budgets/renderif';
import LowriskInvestment from "./LowriskInvestment";
import FloatingIncome from "./FloatingIncome";

export default class PF_Products extends Component {
    constructor() {
        super();
        this.state = {
            btn1active: true,
            btn2active: false
        }
        this.toggleBtn1Status = this.toggleBtn1Status.bind(this);
        this.toggleBtn2Status = this.toggleBtn2Status.bind(this);
    }
    toggleBtn1Status() {
        this.setState({
            btn1active:true,
            btn2active:false
        });
    }
    toggleBtn2Status() {
        this.setState({
            btn1active:false,
            btn2active: true
        });
    }
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <Container>
            {renderIf(this.state.btn1active)(
                <View style = {{marginLeft: 10, marginRight: 10, height: 30, flexDirection: 'row', marginTop: 5}}>
                    <Button style = {{width:(width-20)/2, borderBottomLeftRadius: 10, borderColor: 'darkgray', borderWidth: 1, backgroundColor: 'darkgray', height: 30}} onPress={this.toggleBtn1Status}>
                        <Body><Text style = {{color: 'white'}}>Low-risk Invest</Text></Body>
                    </Button>
                    <Button style = {{width:(width-20)/2, borderBottomRightRadius: 10, borderColor: 'darkgray', borderWidth: 1, backgroundColor: 'white', height: 30}} onPress={this.toggleBtn2Status}>
                        <Body><Text style = {{color: 'black'}}>Floating Income</Text></Body>
                    </Button>
                </View>
            )}
                {renderIf(this.state.btn2active)(<View style = {{marginLeft: 10, marginRight: 10, height: 30, flexDirection: 'row', marginTop: 5}}>
                    <Button style = {{width:(width-20)/2, borderBottomLeftRadius: 10, borderColor: 'darkgray', borderWidth: 1, backgroundColor: 'white', height: 30}} onPress={this.toggleBtn1Status}>
                        <Body><Text style = {{color: 'black'}}>Low-risk Invest</Text></Body>
                    </Button>
                    <Button style = {{width:(width-20)/2, borderBottomRightRadius: 10, borderColor: 'darkgray', borderWidth: 1, backgroundColor: 'darkgray', height: 30}} onPress={this.toggleBtn2Status}>
                        <Body><Text style = {{color: 'white'}}>Floating Income</Text></Body>
                    </Button>
                </View>)}
                {renderIf(this.state.btn1active)(
                    <LowriskInvestment />
                )}
                {renderIf(this.state.btn2active)(
                    <FloatingIncome />
                )}
            </Container>
        );
    }
}
