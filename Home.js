import React from "react";
import { Button, Container, Body, Header, Title, Left, Icon, Right, Content} from "native-base";
import {StyleSheet, View} from 'react-native';
import Chart from 'react-native-chart';

export default class HomeScreen extends React.Component {
    _onChange = formData => {
        /* eslint no-console: 0 */
        console.log(JSON.stringify(formData, null, " "));
    };

    _onFocus = field => {
        /* eslint no-console: 0 */
        console.log(field);
    };

    render() {
        return (
            <Container>
                <Header style = {{"backgroundColor": "#2E4053"}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                <View style={styles.container}>
                    <Chart  style = {styles.chart} data = {dataBar} verticalGridStep = {5} type = 'bar'
                            showDataPoint={true} color="#EE921C" />
                </View>
                <View style={styles.container}>
                    <Chart  style = {styles.chart} data = {dataLine} verticalGridStep = {5} type = 'line'
                    showDataPoint={true} color="#2E534D" />
                </View>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor:'white'
    },
    chart: {
       height: 200,
        width: 350
    }
});

const dataBar = [["OCBC",4250],["POSB",3000],["Standard Chartered",5290]];
const dataLine = [["Sun",10], ["Mon", 350], ["Tues", 5], ["Wed", 100], ["Thu", 20], ["Fri", 40], ["Sat", 200]];