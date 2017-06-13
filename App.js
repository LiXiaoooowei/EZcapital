import React, {Component, PropTypes} from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Drawer from 'react-native-drawer';
import ControlPanel from './ControlPanel';
import Main from './MyMainView';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            drawerDisabled: false
        }
    };
    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };
    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="displace"
                content={
                    <ControlPanel closeDrawer={this.closeDrawer} />
                }
                styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
                onOpen={() => {
                    this.setState({drawerOpen: true})
                }}
                onClose={() => {
                    this.setState({drawerOpen: false})
                }}
                captureGestures={false}
                tweenDuration={100}
                panThreshold={0.08}
                disabled={this.state.drawerDisabled}
                openDrawerOffset={0.6}
                closedDrawerOffset={() => 0.0}
                panOpenMask={0.2}
            >
                <Main />
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    }
})