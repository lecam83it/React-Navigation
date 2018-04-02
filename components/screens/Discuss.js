import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
} from "react-native";

export default class Discuss extends Component {
    static navigationOptions = {
        headerTitle : 'Discuss',
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Discuss</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});