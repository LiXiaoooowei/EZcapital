import React, {Component} from 'react';
import {Drawer} from 'native-base';
import ControlPanel from './ControlPanel';
import Main from './Home';

 export default class App extends Component {
     render() {
         closeDrawer = () => {
             this.drawer._root.close()
         };
         openDrawer = () => {
             this.drawer._root.open()
         };
         return (
             <Drawer
                 ref={(ref) => { this.drawer = ref; }}
                 content={<ControlPanel closeDrawer={this.closeDrawer} navigator = {this.navigator}/>}
                 onClose={() => this.closeDrawer} >
                 <Main/>
             </Drawer>
         );
     }
 }