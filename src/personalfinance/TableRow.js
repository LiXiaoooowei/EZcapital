import React, {Component} from "react";
import Dimensions from 'Dimensions';
import {View} from 'react-native';
import {Container,Title,Content} from "native-base";

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
                            borderWidth: 1
                        }}>
                            <Title style = {{color: 'black', marginTop: 10}}> {this.props.elem1}</Title>
                        </View>
                        <View style = {{
                            width: width/2,
                            borderColor: 'lightgray',
                            backgroundColor: 'white',
                            borderWidth: 1
                        }}>
                            <Title style = {{color: 'black', marginTop: 10}}>{this.props.elem2}</Title>
                        </View>
                    </View>
            </View>
        );
    }
}
