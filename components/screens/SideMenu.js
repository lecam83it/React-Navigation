import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,

} from "react-native";

export default class SideMenu extends Component {
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.introduce} >
                    <Image/>
                    <Text>My name is</Text>
                </View>
                <View style={styles.listItems}>
                <ScrollView  >
                    <Text>Page 1</Text>
                    <Text>Page 2</Text>
                    <Text>Page 3</Text>
                    <Text>Page 4</Text>
                </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    introduce :{
        flex : 1,   
    },
    listItems: {
        flex : 6,
    }
});