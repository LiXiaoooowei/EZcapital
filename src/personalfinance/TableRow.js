import React, {Component} from "react";
import Dimensions from 'Dimensions';
import {View, Text} from 'react-native';
import {Container,Content} from "native-base";

export default class TableRow extends Component {

    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <View style = {{height: 50}}>
                    <View style = {{flexDirection: 'row', height: 50}}>
                        <View style = {{
                            width: width/2,
                            borderColor: 'lightgray',
                            backgroundColor: 'white',
                            borderWidth: 0.5
                        }}>
                            <Text style = {{color: 'black', marginTop: 13, justifyContent: 'center', alignSelf: 'center'}}> {this.props.elem1}</Text>
                        </View>
                        <View style = {{
                            width: width/2,
                            borderColor: 'lightgray',
                            backgroundColor: 'white',
                            borderWidth: 0.5
                        }}>
                            <Text style = {{color: 'black', marginTop: 13,justifyContent: 'center', alignSelf: 'center'}}>{this.props.elem2}</Text>
                        </View>
                    </View>
            </View>
        );
    }
}
