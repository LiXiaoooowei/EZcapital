import React, {Component, PropTypes} from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import {Header, Title, Content, Button, Left, Icon, Body} from 'native-base';

export default class ControlPanel extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired
     };
    render(){
        return (
            <ScrollView style={styles.container}>
                <Header style={{"backgroundColor": "darkgray"}}>
                    <Left>
                        <Button transparent onPress={this.context.drawer.open}><Icon name = "menu"/></Button>
                    </Left>
                    <Body style = {{"flex": 1}}><Title style = {{"color": "white", "fontWeight": '100', 'fontFamily': 'Comic Sans MS'}}>Home</Title></Body>
                </Header>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 0,
        flex: 1,
    }
})