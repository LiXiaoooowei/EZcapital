import React, {Component} from 'react';
import BankCardTransfer from './ToBankCard';
import Transfer from './Transfer';

import {StackNavigator} from 'react-navigation';

export default (DrawNav = StackNavigator({
    Transfer: {screen: Transfer},
    ToBankCard: {screen: BankCardTransfer}
}));