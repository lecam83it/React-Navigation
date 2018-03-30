import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,

} from "react-native";

export default class Profile extends Component {
    static navigationOptions = {
        headerTitle : 'Profile',
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Profile</Text>
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