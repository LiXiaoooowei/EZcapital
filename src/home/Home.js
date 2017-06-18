import React from "react";
import { Button, Container, Body, Header, Title, Left, Icon, Right, Content, DeckSwiper, Card, CardItem, Thumbnail, Text} from "native-base";
import {StyleSheet, View, Image} from 'react-native';
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
                <Content>
                <View style={styles.container}>
                    <Chart  style = {styles.chart} data = {dataBar} verticalGridStep = {5} type = 'bar'
                            showDataPoint={true} color="#EE921C" />
                </View>
                <View style={styles.container}>
                    <Chart  style = {styles.chart} data = {dataLine} verticalGridStep = {5} type = 'line'
                    showDataPoint={true} color="#2E534D" />
                </View>
                    <View>
                        <Card style = {{alignItems: 'center', justifyContent: 'center'}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={ require('../../assets/icn_dbs.png')} style = {{resizeMode: 'contain'}} />
                                    <Body>
                                    <Text>DBS bank</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Image source = {require('../../assets/card_dbs.png')} style = {{resizeMode: 'contain', height: 220, width: 400}}/>
                            </CardItem>
                            <CardItem>
                                <Right>
                                <Button transparent onPress={() => this.props.navigation.navigate("DBS")}>
                                    <Icon name="star-half" />
                                    <Text>View Details</Text>
                                </Button>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style = {{alignItems: 'center', justifyContent: 'center'}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={ require('../../assets/icn_sc.png')} style = {{resizeMode: 'contain'}} />
                                    <Body>
                                    <Text>Standard Chartered bank</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Image source = {require('../../assets/card_sc.png')} style = {{resizeMode: 'contain', height: 220, width: 400, justifyContent: 'center', alignItems: 'center'}}/>
                            </CardItem>
                            <CardItem>
                                <Right>
                                    <Button transparent onPress={() => this.props.navigation.navigate("SC")}t>
                                        <Icon name="star-half" />
                                        <Text>View Details</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                        <Card style = {{alignItems: 'center', justifyContent: 'center'}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={ require('../../assets/icn_ocbc.png')} style = {{resizeMode: 'contain'}} />
                                    <Body>
                                    <Text>OCBC bank</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Image source = {require('../../assets/card_ocbc.png')} style = {{resizeMode: 'contain', height: 220, width: 400, justifyContent: 'center', alignItems: 'center'}}/>
                            </CardItem>
                            <CardItem>
                                <Right>
                                    <Button transparent onPress={() => this.props.navigation.navigate("OCBC")}>
                                        <Icon name="star-half" />
                                        <Text>View Details</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
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

HomeScreen.navigationOptions = ({ navigation }) => ({
    header: (
        <Header style = {{"backgroundColor": "#2E4053"}}>
            <Left>
                <Button
                    transparent
                    onPress={() => navigation.navigate("DrawerOpen")}
                >
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
            <Title>Home</Title>
            </Body>
            <Right />
        </Header>
    )
});


const dataBar = [["OCBC",4250],["POSB",3000],["Standard Chartered",5290]];
const dataLine = [["Sun",10], ["Mon", 350], ["Tues", 5], ["Wed", 100], ["Thu", 20], ["Fri", 40], ["Sat", 200]];
