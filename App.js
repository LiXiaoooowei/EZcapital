import React, {Component} from 'react';
import {Drawer, withNavigation} from 'native-base';
import ControlPanel from './ControlPanel';

 export default class App extends Component {
     render() {
         closeDrawer = () => {
             this.drawer._root.close()
         };
         openDrawer = () => {
             this.drawer._root.open()
         };
         return (
            <ControlPanel/>
         );
     }
 }