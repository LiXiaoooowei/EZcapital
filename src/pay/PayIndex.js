import React, {Component} from 'react';
import Pay from './Pay';
import QuickPay from './QuickPay';

import {StackNavigator} from 'react-navigation';

export default (DrawNav = StackNavigator({
    Pay: {screen: Pay},
    QuickPay: {screen: QuickPay}
}));