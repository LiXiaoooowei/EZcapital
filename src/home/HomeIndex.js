import React, {Component} from 'react';
import Home from './Home';
import DBS from './DBSpage';
import SC from './SCpage';
import OCBC from './OCBCpage';
import Ewallet from './EwalletPage';

import {StackNavigator} from 'react-navigation';

export default (DrawNav = StackNavigator({
    Home: {screen: Home},
    DBS: {screen: DBS},
    SC: {screen: SC},
    OCBC: {screen: OCBC},
    Ewallet: {screen: Ewallet}
}));