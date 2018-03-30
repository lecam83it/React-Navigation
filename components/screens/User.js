import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,

} from "react-native";

export default class User extends Component {
    static navigationOptions = {
        headerTitle : 'User',
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>User</Text>
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