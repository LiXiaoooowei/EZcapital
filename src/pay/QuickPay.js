import React from "react";
import {View, Image} from 'react-native';
import {Text, Container, Card,Content, CardItem, Body, Header, Footer,FooterTab, Left, Right, Icon, Title, Button, List, ListItem, Thumbnail} from "native-base";
import {TabNavigator} from 'react-navigation';
import QuickPayScan from './QuickPayScan';
import QuickPayCode from './QuickPayCode';


export default (MainScreenNavigator = TabNavigator(
    {
        QuickPayCode: { screen: QuickPayCode },
        QuickPayScan: { screen: QuickPayScan }
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <Footer style = {{backgroundColor: '#2E4053'}}>
                    <FooterTab style = {{backgroundColor: '#2E4053'}}>
                        <Button
                            vertical
                            active={props.navigationState.index === 0}
                            onPress={() => props.navigation.navigate("QuickPayCode")} transparent>
                            <Icon name="bowtie" style = {{color: 'white'}}/>
                            <Text style = {{color: 'white'}}>Payment Code</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("QuickPayScan")} transparent>
                            <Icon name="briefcase" style = {{color: 'white'}}/>
                            <Text style = {{color: 'white'}}>Scan Pay</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
    }
));
