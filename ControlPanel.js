import React, {Component, PropTypes} from 'react';

import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

export default class ControlPanel extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {closeDrawer} = this.props
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.controlText}>Control Panel</Text>
                <TouchableOpacity style={styles.button} onPress={closeDrawer}>
                    <Text>Close Drawer</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'lightgray',
    },
    controlText: {
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
})