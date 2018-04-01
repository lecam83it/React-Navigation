import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    Image,
    ListView,

} from "react-native";

export default class Home extends Component {
    static navigationOptions = {
        headerTitle : 'Home',
    }
    constructor(props){
        super(props);
        this.state = {
            dataSource : new ListView.DataSource({rowHasChanged:(o1, o2) =>o1 !== o2}).cloneWithRows(['row 1', 'row 2']),   
        }
    }
  
    render(){
        return(
            <View style={styles.container}>
                <Text>Home</Text>
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={ (data)=>
                        <View>
                            <Text>
                                {data}
                            </Text>
                        </View>
                    }
                />
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
});