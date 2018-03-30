import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    Image,

} from "react-native";

export default class Home extends Component {
    static navigationOptions = {
        headerTitle : 'Home',
    }
    constructor(props){
        super(props);
    }
  
    render(){
        return(
            <View style={styles.container}>
                <Text>Home</Text>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.navigate('ProfileScreen');
                }}
                >
                    <Text>Click Me</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerScreen: {
        height : 50,
        backgroundColor: 'green',
        width: '100%',
    },

});